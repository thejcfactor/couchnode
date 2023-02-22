'use strict'

const assert = require('chai').assert

const H = require('./harness')

describe('#users', function () {
  let testUser

  before(function () {
    H.skipIfMissingFeature(this, H.Features.UserManagement)

    testUser = H.genTestKey()
  })

  it('should successfully get all roles', async function () {
    var roles = await H.c.users().getRoles()
    assert.isAtLeast(roles.length, 1)
  })

  it('should successfully create a user', async function () {
    await H.c.users().upsertUser({
      username: testUser,
      password: 'password',
      roles: ['ro_admin'],
    })
  })

  it('should successfully get user', async function () {
    var user = await H.c.users().getUser(testUser)
    assert.equal(user.username, testUser)
  })

  it('should fail to get a missing user', async function () {
    await H.throwsHelper(async () => {
      await H.c.users().getUser('missing-user-name')
    }, H.lib.UserNotFoundError)
  })

  it('should fail to drop a user', async function () {
    await H.c.users().dropUser(testUser)
  })

  it('should successfully change current user password', async function () {
    var changePasswordUsername = "changePasswordUser"
    var changeUserPassword = "changeUserPassword"
    var newPassword = "newPassword"

    await H.c.users().upsertUser({
      username: changePasswordUsername,
      password: changeUserPassword,
      roles: ['admin'],
    })

    var cluster = await H.lib.Cluster.connect(H.connStr, {username : changePasswordUsername, password : changeUserPassword})
    await cluster.users().changePassword(newPassword)

    //Assert can connect using new password
    var success_cluster = await H.lib.Cluster.connect(H.connStr, {username : changePasswordUsername, password : newPassword})
    await success_cluster.close()

    //Assert cannot authenticate using old credentials
    await H.throwsHelper(async () => {
      await H.lib.Cluster.connect(H.connStr, {username : changePasswordUsername, password : changeUserPassword})
    }, H.lib.AuthenticationFailureError)

    await cluster.close()
  })

  it('should fail to drop a missing user', async function () {
    await H.throwsHelper(async () => {
      await H.c.users().dropUser('missing-user-name')
    }, H.lib.UserNotFoundError)
  })
})

describe('#user-groups', function () {
  let testGroup

  before(function () {
    H.skipIfMissingFeature(this, H.Features.UserGroupManagement)

    testGroup = H.genTestKey()
  })

  it('should successfully upsert a group', async function () {
    await H.c.users().upsertGroup({
      name: testGroup,
      roles: ['ro_admin'],
    })
  })

  it('should successfully get a group', async function () {
    var grp = await H.c.users().getGroup(testGroup)
    assert.equal(grp.name, testGroup)
    assert.isAtLeast(grp.roles.length, 1)
  })

  it('should fail to get a missing group', async function () {
    await H.throwsHelper(async () => {
      await H.c.users().getGroup('missing-group-name')
    }, H.lib.GroupNotFoundError)
  })

  it('should successfully get all groups', async function () {
    var groups = await H.c.users().getAllGroups()
    assert.isAtLeast(groups.length, 1)
  })

  it('should successfully drop a group', async function () {
    await H.c.users().dropGroup(testGroup)
  })

  it('should fail to drop a missing group', async function () {
    await H.throwsHelper(async () => {
      await H.c.users().dropGroup('missing-group-name')
    }, H.lib.GroupNotFoundError)
  })
})
