var a = function(css,js){
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <title>Register - SB Admin</title>
            ${css}
            <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
        </head>
        <body class="bg-primary">
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-7">
                                    <div class="card shadow-lg border-0 rounded-lg mt-5">
                                        <div class="card-header"><h3 class="text-center font-weight-light my-4">회원가입</h3></div>
                                        <div class="card-body">
                                            <form action="/register/process" method="post">
                                                <div class="row mb-3">
                                                    <div class="col-md-6">
                                                        <div class="form-floating mb-3 mb-md-0">
                                                            <input class="form-control" id="inputFirstName" name="name" type="text" placeholder="Enter your first name" />
                                                            <label for="inputFirstName">이름</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <input class="form-control" id="inputEmail" name="id" type="text" placeholder="name@example.com" />
                                                    <label for="inputEmail">아이디</label>
                                                </div>
                                                <div class="row mb-3">
                                                    <div class="col-md-6">
                                                        <div class="form-floating mb-3 mb-md-0">
                                                            <input class="form-control" id="inputPassword" name="password" type="password" placeholder="Create a password" />
                                                            <label for="inputPassword">비밀번호</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-floating mb-3 mb-md-0">
                                                            <input class="form-control" id="inputPasswordConfirm" type="password" placeholder="Confirm password" />
                                                            <label for="inputPasswordConfirm">비밀번호확인</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <input class="form-control" id="cellPhone" name="phone" type="text" placeholder="name@example.com" />
                                                    <label for="cellPhone">핸드폰 번호</label>
                                                </div>
                                                <div class="mt-4 mb-0">
                                                    <div class="d-grid"><button type="submit" class="btn btn-primary btn-block">제출</button></div>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="card-footer text-center py-3">
                                            <div class="small"><a href="/login">로그인하러가기</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div id="layoutAuthentication_footer">
                    <footer class="py-4 bg-light mt-auto">
                        <div class="container-fluid px-4">
                            <div class="d-flex align-items-center justify-content-between small">
                                <div class="text-muted">Copyright &copy; Your Website 2022</div>
                                <div>
                                    <a href="#">Privacy Policy</a>
                                    &middot;
                                    <a href="#">Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            <script>
            function autoHypenPhone(str){
                str = str.replace(/[^0-9]/g, '');
                var tmp = '';
                if( str.length < 4){
                    return str;
                }else if(str.length < 7){
                    tmp += str.substr(0, 3);
                    tmp += '-';
                    tmp += str.substr(3);
                    return tmp;
                }else if(str.length < 11){
                    tmp += str.substr(0, 3);
                    tmp += '-';
                    tmp += str.substr(3, 3);
                    tmp += '-';
                    tmp += str.substr(6);
                    return tmp;
                }else{              
                    tmp += str.substr(0, 3);
                    tmp += '-';
                    tmp += str.substr(3, 4);
                    tmp += '-';
                    tmp += str.substr(7);
                    return tmp;
                }
                return str;
            }
            var cellPhone = document.getElementById('cellPhone');
            cellPhone.onkeyup = function(event){
                    event = event || window.event;
                    var _val = this.value.trim();
                    this.value = autoHypenPhone(_val) ;
            }
            </script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
            ${js}
        </body>
    </html>
    `
}
module.exports = a;