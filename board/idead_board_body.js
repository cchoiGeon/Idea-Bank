var a = function(a){
    return`
    <section class="notice">
       <div class="page-title">
          <div class="container">
              <h3>아이디어 게시판</h3>
          </div>
      </div>
      <div id="board-search">
          <div class="container">
              <div class="search-window">
                  <form action="">
                      <div class="search-wrap">
                          <label for="search" class="blind">게시판 제목 검색</label>
                          <input id="search" type="search" name="" placeholder="제목을 입력해주세요." value="">
                          <button type="submit" class="btn btn-dark">검색</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    <!-- board list area -->
      <div id="board-list">
          <div class="container">
              <table class="board-table">
                  <thead>
                    <tr>
                        <th scope="col" class="th-num">번호</th>
                        <th scope="col" class="th-title">제목</th>
                        <th scope="col" class="th-date">작성자</th>
                    </tr>
                  </thead>
                  ${a}
              </table>
          </div>
      </div>
      <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="/idea_board/1">1</a></li>
            <li class="page-item"><a class="page-link" href="/idea_board/2">2</a></li>
            <li class="page-item"><a class="page-link" href="/idea_board/3">3</a></li>
            <li class="page-item"><a class="page-link" href="/idea_board/4">4</a></li>
            <li class="page-item"><a class="page-link" href="/idea_board/5">5</a></li>
            <li class="page-item"><a class="page-link" href="/idea_board/6">6</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
            <li class="page-item"><a class="page-link" href="/idea_board_write">글쓰기</a></li></li>
          </ul>
      </nav>
    </section>`
}
module.exports = a;