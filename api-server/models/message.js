class Message {
  constructor(sender, content) {
    this.sender = sender
    this.content = content
    this.createdAt = new Date()
  }

  getContent() {
    return this.content
  }

  getSender() {
    return this.sender
  }
}

module.exports = Message
