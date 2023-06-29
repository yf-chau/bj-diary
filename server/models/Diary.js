const db = require('../db/connect')

class Diary {
    constructor({
        entry_id, entry_date, entry_time, title, content, category, image_link
    }) {
        this.entry_id = entry_id
        this.entry_date = entry_date
        this.entry_time = entry_time
        this.title = title
        this.content = content
        this.category = category
        this.image_link = image_link
    }

    static async getAll() {
        const response = await db.query('SELECT * FROM diary');
        if (response.rows.length === 0) {
            throw new Error("No entries available.")
        } else {
            return response.rows.map(d => new Diary(d))
        }
    }
}

module.exports = Diary
