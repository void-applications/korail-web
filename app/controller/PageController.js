import Controller from '../../core/mvc/Controller.js'
import PageModel from '../model/PageModel.js'
import PageView from '../view/PageView.js'

export default class PageController extends Controller {
  constructor() {
    super(new PageView(), new PageModel())
  }

  // -------------------------------- 페이지 실행관련 메소드 --------------------------------
  // 로그인 페이지
  signIn = () => {
    this.view.showTemplate('signIn')
    this.setSignInListener()
  }

  admin = () => {
    this.view.showTemplate('admin')
    this.setAdminListener()
  }

  // -------------------------------- 로그인 페이지 관련 메소드 --------------------------------
  // 로그인관련 리스너 추가하는 메소드
  setSignInListener = () => {
    this.view.getElement('.signin--form').addEventListener('submit', this.signInListener)
  }

  // 로그인관련 리스너 이벤트 관리하는 리스너
  signInListener = event => {
    switch (event.currentTarget.classList[1]) {
      case 'signin--form':
        event.preventDefault()
        // TODO : 로그인 확인하는 로직 필요(현재는 그냥 관리자 페이지로 이동)
        this.navigatePage('#/admin')

        break

      default:
        console.log('signInListener : 해당 클래스에 해당하는 case 없음')
        break
    }
  }

  // -------------------------------- 로그인 페이지 관련 메소드 --------------------------------
  setAdminListener = () => {}

  setAdminListener = () => {}
}
