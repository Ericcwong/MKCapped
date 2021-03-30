export const actions ={
    nuxtServerInit(vuexContext,{state,getters}){
      console.log(vuexContext.getters)
        console.log(state)

      }
}