  export function isWeixin() {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true
    } else {
      return false
    }
  }



  export function checkLogin() {
    window.enterPath = $router.currentRoute.path === '/login' ? '/' : $router.currentRoute.path;
    let token = localStorage.getItem("token");
    if (token) {
      $router.replace(window.enterPath);
      return;
    }
    if ($router.currentRoute.path !== '/login') {
      $router.push('/login')
    }
  }

  /**
   *[onLoginSuccess 登录成功]
   */
  export function onLoginSuccess() {
    let token = localStorage.getItem("token");
    if (!token) $router.replace(window.enterPath || '/');
  }