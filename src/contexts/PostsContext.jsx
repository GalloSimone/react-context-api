import React,{ Children, createContext,useContest, useContext } from "react";

const PostsContext = createContext();
const noticeBoard =[
    {  
        id:1, 
        titolo: "Ciambellone",
        description:"Un dolce soffice e genuino, perfetto per addolcire le tue giornate con un tocco di tradizione casalinga.",
        img:"ciambellone.jpeg",
        avaible: "false",
        tags : ["ciambellone", "tradizione"]
    },
    {   
        id:2,
        titolo: "Cracker alla barbabietola",
        description:"Leggeri e croccanti, questi cracker uniscono il sapore unico della barbabietola a una bontà irresistibile.",
        img:"cracker_barbabietola.jpeg",
        avaible: "true",
        tags : ["cracker","barbabietola"]
    },
    {   
        id:3,
        titolo: "Pane fritto",
        description:" Una delizia dorata e fragrante, ricoperta di zucchero o miele, che regala un'esplosione di dolcezza al primo morso.",
        img:"cracker_barbabietola.jpeg",
        avaible: "true",
        tags : ["pane", "fritto"]
    },
    {   
        id:4,
        titolo: "Pasta alla barbabietola",
        description:"Un primo piatto scenografico e raffinato, dal sapore delicato e dalla crema vellutata che conquista",
        img:"pasta_barbabietola.jpeg",
        avaible: "false",
        tags : ["pasta", "barbabietola"]
    },
]

export const PostProvider = ({children}) =>{
    return(
        <PostsContext.Provider value={noticeBoard}>
      {children}
    </PostsContext.Provider>
  );
}

export const usePosts = ( ) => useContext (PostsContext)