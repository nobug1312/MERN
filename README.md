# MERN NOTE

- yarn build : build ra thư mục dist để đẩy lên prod
- sematic versioning : ví dụ "react": "18.2.0", 18 :số đầu tiên ví dụ update lên 19 là update rất nhiều có thể nói là phiên bản mới, 2 : thay đổi nhỏ, 0: fix bug version
- tree shaking import :
- css baseline : config của mui dùng để tránh conflict css giữa các trình duyệt
- flickering : khoảng delay nhấp nháy giữa dark mode sang light mode khi hard reload

# CSS

- '&' trong các framework đồng nghĩa với this trong js
  - '& .ABC' -> thao tác trên nested element có class ABC
  - '&.ABC' -> đây là combine selector, có nghĩa là thao tác trên element có chứa tổ hợp cả element & và class ABC
  - '&:hover' -> đây là pseudo class
- Khi sử dụng value "unset" cho 1 thuộc tính có nghĩa là thả cho nó kế thừa giá trị của thuộc tính đó từ thằng cha
- trick cho padding và margin có cùng value như này là để khi có component có cũng spacing như vậy và không có nó cũng spacing như vậy, giúp tăng tính nhất quán:
  p: "0 5px",
  m: "0 5px",

# MUI:

- sx : là props hỗ trợ override style của mui component, dễ quản lý và bảo trì code hơn sử dụng style, và có thể truy cập trực tiếp vào theme của MUI
- Box là thẻ div trong thư viện mui
- styled API : 1 api build sẵn của mui giúp custom component để reused
- viewheight : đơn vị khung nhìn, nó khác với 100%
- Typography : 1 loại component tuỳ biến, có thể biến nó thành nhiều thẻ khác thông qua props variants
- pseudo-element (::before, ::after, ::selection, ::first-line ) : các phần tử giả, được sử dụng để tạo một số style đặc biệt của element được chọn.
- pseudo-classes (hover, click,) : được sử dụng để định nghĩa một trạng thái đặc biệt nào đó của một phần tử được chọn

# VITE

- vào file vite.config.js : để config xử lý từ relative import sang absolute import resolve: {
  alias:[
  { find: '~', replacement: '/src' }
  ]
  }
  => từ đó khi nào có 2 nhiều cấp như ../../ thì nên sử dụng ~/
