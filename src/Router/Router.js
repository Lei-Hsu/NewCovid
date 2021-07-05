import Search from '../Pages/Search/index'
import Board from '../Pages/Board/index'
import Introduction from '../Pages/Introduction/index'


export const routers = [
  {
    path: '/NewCovid/search',
    component: Search
  },
  {
    path: '/NewCovid/board',
    component: Board
  },
  {
    path: '/NewCovid/introduction',
    component: Introduction
  },
]