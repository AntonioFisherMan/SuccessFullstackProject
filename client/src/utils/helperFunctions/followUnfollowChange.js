

export const followUnfollowChange=(items,objId,actionId,objProps)=>{
   return items.map((user) => {
        if (user[objId] === actionId) {
          return {...user,...objProps};
        }
        return user
        
     
      })
}