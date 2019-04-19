let state = {
    topics: [
        {
            topicId: 1,

            title: "Title 1",
            firstMessage: "first message for topic 1",
            messages: [
                {topicId: 1, messageId: 1, text: "first message for topic 1"},
                {topicId: 1, messageId: 2, text: "koroche cheto napisano"}
            ]
        },
        {
            topicId: 2,
            title: "Title 2",
            firstMessage: "first message for topic 2",
            messages: [
                {topicId: 2, messageId: 1, text: "aaaaaaaaaaaaa"},
                {topicId: 2, messageId: 2, text: "aaaaaaaaaaaaa"}
            ]
        },
        {
            topicId: 3,
            title: "Title 3",
            firstMessage: "first message for topic 3",
            messages: [
                {topicId: 3, messageId: 1, text: "aaaaaaaaaaaaa"},
                {topicId: 3, messageId: 2, text: "aaaaaaaaaaaaa"}
            ]
        },
        {
            topicId: 4,
            title: "Title 4",
            firstMessage: "first message for topic 4",
            messages: [
                {topicId: 4, messageId: 1, text: "aaaaaaaaaaaaa"},
                {topicId: 4, messageId: 2, text: "aaaaaaaaaaaaa"},
                {topicId: 4, messageId: 3, text: "aaaaaaaaaaaaa"}]
        }
    ],
    users: [
        {userId: 1, name: "Nikita"},
        {userId: 2, name: "Alexey"}
    ]
};

export default state;