// Sample JSON data
const data = {
    sessions: [
        {
            _id: "672df039f84683cb1c9976fc",
            title: "Child Education",
            description: "Invest in your children's future",
            mode: "Online",
            sessionType: "DDFPL",
            firstDateTime: "2024-11-09T03:00:00.000+00:00",
            secondDateTime: "2024-11-10T10:30:00.000+00:00",
            thumbnail: "http://res.cloudinary.com/dpy39ctzc/image/upload/v1731063859/xyznewthumbnail",
        },
        {
            _id: "672df039f84683cb1c9976fd",
            title: "Retirement Planning",
            description: "Secure your retirement",
            mode: "In-Person",
            sessionType: "RTPPL",
            firstDateTime: "2024-11-12T09:00:00.000+00:00",
            secondDateTime: "2024-11-13T14:30:00.000+00:00",
            thumbnail: "http://res.cloudinary.com/dpy39ctzc/image/upload/v1731063859/newthumb1",
        },
    ],
    registeredSessions: [
        { _id: "6733a143b5436d0dba8d2e08", sessionId: "672df039f84683cb1c9976fc", userId: "6728dffa2f06024a5952c547" },
        { _id: "6733a143b5436d0dba8d2e09", sessionId: "672df039f84683cb1c9976fc", userId: "6728dffa2f06024a5952c548" },
        { _id: "6733a143b5436d0dba8d2e0a", sessionId: "672df039f84683cb1c9976fd", userId: "6728dffa2f06024a5952c549" },
    ],
    users: [
        { userId: "6728dffa2f06024a5952c547", firstname: "John", lastname: "Doe", email: "johndoe123@example.com" },
        { userId: "6728dffa2f06024a5952c548", firstname: "Jane", lastname: "Smith", email: "janesmith@example.com" },
        { userId: "6728dffa2f06024a5952c549", firstname: "Robert", lastname: "Brown", email: "robertbrown@example.com" },
    ],
};

export default data;