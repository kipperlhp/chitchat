class User {
  constructor(userId, name) {
    this.id = userId
    this.name = name || 'Anonymous'
    this.createdAt = new Date()
  }

  getName() {
    return this.name
  }

  updateName(newName) {
    this.name = newName || 'Anonymous'
  }
}

module.exports = User
