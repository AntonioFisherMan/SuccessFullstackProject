import UsersReducer,{setUsers,deleteUser} from './UsersReducer'
let state={
    users:[
        {},
    ]
}
it('renders new user', () => {
    //test data
    let action =setUsers("a")
    //action
    let newState=UsersReducer(state,action)
    //expect
    expect(newState.users.length).toBe(1)
  });
  it('length after deleting should be decrement', () => {
    //test data
    let action=deleteUser(1)
    //action
    let newState=UsersReducer(state,action)
  
  })