import Router from './core/Router.js'
import PageController from './app/controller/PageController.js'

const router = new Router()
// 컨트롤러 객체-> 컨트롤러 객체가 하나 이상이면, 컨트롤러 관리하는 App 클래스 생성하기
const pageController = new PageController()

router.addRoute('', () => {
  pageController.signIn()
})

router.addRoute('#/admin', () => {
  pageController.admin()
})
