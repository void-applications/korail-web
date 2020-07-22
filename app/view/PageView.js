import View from '../../core/mvc/View.js'

export default class PageView extends View {
  constructor() {
    super()
  }

  showTemplate = whichPage => {
    this.refreshTemplate()
    switch (whichPage) {
      case 'signIn':
        this.createSignIn()
        break

      case 'admin':
        this.createAdmin()
        break
    }
  }

  // -------------------------------- 로그인 페이지 --------------------------------
  createSignIn = () => {
    this.createDefaultHeader()

    const mainSection = this.createElement('section', 'signin-section')
    const signInBox = this.createElement('article', 'signin-box')

    const mainImageBox = this.createElement('figure', 'image-box')
    const image = this.createImgElement('image-box__image', './style/images/test.png')
    mainImageBox.append(image)

    const formBox = this.createElement('div', 'form-box')
    const signInForm = this.createElement('form', 'signin signin--form')
    // const title = this.createTextElement('label', 'signin__title', 'SIGN IN')
    const logo = this.createImgElement('signin__logo', './style/images/logo.jpg')
    const inputEmail = this.createInputElement('signin__input sign__input--email', 'text', 'email', 'email')
    const inputPassword = this.createInputElement('signin__input sign__input--password', 'password', 'password', 'password')
    const smallAlert = this.createTextElement('small', 'signin__faied-alert', '아이디 혹은 비밀번호를 확인해주세요')
    const submitSignIn = this.createSubmitElement('signin__submit', '로그인')
    signInForm.append(logo, inputEmail, inputPassword, smallAlert, submitSignIn)
    formBox.append(signInForm)

    signInBox.append(mainImageBox, formBox)
    mainSection.append(signInBox)
    this.main.append(mainSection)

    this.createDefaultFooter()
  }

  // -------------------------------- 관리자 페이지 --------------------------------
  createAdmin = () => {
    this.createDefaultHeader()

    const mainSection = this.createElement('section', 'admin-section')

    this.main.append(mainSection)

    this.createDefaultFooter()
  }
}
