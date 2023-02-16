var a = (title,writer,content) => `
<section class="notice">
    <div class="page-title">
        <div class="container">
            <div id="board-list">
                    <table border='1' class="table" id="sanyoung">
                        <tr>
                            <th>
                                제목 : ${title}
                            </th>
                        </tr>
                        <tr>
                            <td >
                                글쓴이 : ${writer}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                사진?
                            </td>
                        </tr>
                        <tr>
                            <td>
                                내용 : ${content}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                댓글들 
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <label>댓글쓰기 : </label>
                                <textarea name="content" placeholder="내용을 입력하세요." style="width: 100%; height: 100%"></textarea>
                                <input type="submit" value="제출">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" align=right>
                                <button type="button"><a href="/idea_board" style="text-decoration-line: none; color: black">뒤로가기</a></button>
                            </td>
                        </tr>
                    </table>
            </div>
        </div>
    </div>
</section>
`
module.exports = a;