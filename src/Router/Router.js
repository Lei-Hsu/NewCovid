import Search from '../Pages/Search/index'
import Board from '../Pages/Board/index'
import Introduction from '../Pages/Introduction/index'


export const routers = [
  {
    path: '/search',
    component: Search
  },
  {
    path: '/board',
    component: Board
  },
  {
    path: '/introduction',
    component: Introduction
  },
]