DROP TABLE IF EXISTS diary;

CREATE TABLE diary (
    entry_id INT GENERATED ALWAYS AS IDENTITY,
    entry_date DATE NOT NULL,
    entry_time TIME NOT NULL,
    title VARCHAR(100),
    content VARCHAR(1000),
    category VARCHAR(50),
    image_link VARCHAR(200),
    PRIMARY KEY(entry_id)
);

INSERT INTO
    diary (
        entry_date,
        entry_time,
        title,
        content,
        category,
        image_link
    )
VALUES
    (
        '2023-06-29',
        '11:30',
        'Postgres localhost test',
        'If you see this, the test is successful. Here is a cat picture.',
        'test',
        'https://http.cat/images/409.jpg'
    );
