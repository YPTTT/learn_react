// set cho chạy port khác package.json/start để đổi port
-- set chay voi port khac port 3000 mac dinh
"start": "set port=4000 && react-scripts start"

// Component là các thành phần của một trang web, trang web được tạo nên từ nhiều component

// Ham render : trả ra giao diện người dùng

// Root file của react là %PUBLIC_URL%

// càng chia nhỏ các components thì càng dễ quản lý

// cách viết function là cách viết theo cách cũ, class là cách viết của cú phát ES6

//=================================================================================================================================
++ Props

// Props là thuộc tính của Conponents

// Truyền dữ liệu từ cha -> con, theo dạng key="value" ( không đặt tên key = children ) value nhận vào dữ liệu là kiểu chuỗi. Bỏ dấu { } để truyền đúng kiểu dữ liệu

// Nhận lại data thông qua từ khóa : this.props.key

//=================================================================================================================================
++ Handling event

gọi và sử dụng Props
    -- cách 1
        // Tạo constructor có tham số props và gọi super(props)
        // blind function
    -- cách 2 ( khuyên dùng, nhanh gọn hơn cách 1 không phải bind )
        // tên_function = () => { }

//=================================================================================================================================
++ Refs

// lấy giá trị của các ô ( input, textarea, v.v ... )

// cú pháp : thêm thuộc tính ref = "key"

// lấy giá trị : this.refs.key.value

// chú ý :
    ++ đặt ref như thế này [ ref={(node) => { this.node = node }} ]
    ++ lấy giá trị trong hàm là [ console.log(this.node.value) ]

//=================================================================================================================================
++ State

// là trạng thái của components

// khai báo những giá trị cần lưu trữ riêng của components đó

// tạo State tại constructor. Gọi this.state = { key : value, key1 : value1, ... }

// Gọi state: this.state.key

// Thay đổi state : this.setState({ key : value, key1 : value1, ... })

// Khi setState được gọi => hàm render được gọi

// so sánh

            props                    ||          state
<!-- ============================================================ -->
    Nhận dữ liệu từ bên ngoài        ||    Nhận dữ liệu nội bộ
    Không thể thay đổi giá trị       ||    Có thể thay đổi giá trị
                                     ||    Phạm vị Private trong components

//=================================================================================================================================
++ Form

// text, textarea, select, radio, checkbox( đặc biệt )

// lưu ý
    + chặn submit form ( preventDefault() : là hàm chặn submit form )
    + nhận giá trị onChange và hiển thị bằng value
    + nhận giá trị form bằng onSubmit

// button trong form, type phải là submit

// khi submit form thì phải thêm value cho từng ô input, nếu k có thì k đổ ra được giá trị mặc định của ô input ( khi có value thì phải kèm theo onChange )

// ở radio input cần thêm checked đẻ set giá trị mặc định cho radio

//=================================================================================================================================

//componentWillMount khi refesh thì sẽ hàm sẽ tự động được gọi lại và chỉ gọi duy nhất 1 lần

// thực hiện thay đổi và không gửi data đi thì dùng type = button

// nếu thực hiện thay đổi và gửi data đi thì dùng type = submit

//=================================================================================================================================
++ React router

// Nếu bị trùng path với nhau ( ví dụ path = '/' và path = '/about' ( trùng dâu '/' ) phải thên thuộc tính exact )

// router thêm vào thì không được load lại trang ( chỉ thay đổi nội dung ), đó mới là đúng phương châm của react. Để làm được điều đó thì sử dụng thẻ <Link>

// ví dụ : <Link to='/'>Trang chủ</Link>

// <NavLink exact activeStyle = {{ color : 'white' }} to='/'>Trang chủ</NavLink>  ( activeStyle để hiển thị link đang được kích hoạt, color là thuộc tính của css)

++ Custom Link

// xem ví dụ trong src/App.js

++ Đối tượng match

// công dụng chỉ sử dụng react ở một số chức năng còn lại vẫn request về phía server

// Match là tham số đầu vào của hàm React router

++ Redirect