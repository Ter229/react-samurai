import profileReducer from "./profile-reducer"
import { addPostActionCreator } from "./profile-reducer"




it("lenght of posts should be incremented", () => {
    //1. test data
    let action = addPostActionCreator("pudge pedg padg")
    let state = {
        posts: [
            { id: 1, message: "i love pudge", likesCount: 12 },
            { id: 2, message: "i love too", likesCount: 11 },
        ]
    }
    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.posts.length).toBe(3)
})

