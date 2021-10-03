---
layout: post
topic: dev
title: "Cài đặt pygame và tạo cửa sổ game - Làm game với pygame (Phần 1)"
brief: "Tìm hiểu cách cài đặt pygame, tạo cửa sổ game đầu tiên, thử vẽ vài thứ lên màn hình"
cover: "pygame_1.png"
---

Chào mọi người! Đây là bài hướng dẫn đầu tiên trong chuỗi bài hướng dẫn **làm game với pygame**. Ở đây, chúng ta sẽ tìm hiểu cách cài đặt **pygame** và tạo một cửa sổ game đầu tiên.

Trước khi đọc bài hướng dẫn này, các bạn cần có một số kiến thức cơ bản về **python** nhé! Những gì mình hướng dẫn là những thứ cơ bản, nên còn nhiều kiến thức mình chưa đề cập đến, các bạn nên chủ động tìm hiểu thêm trên Google, Youtube nhé! Các bạn có thể vào [đây](https://www.pygame.org/docs/) nếu muốn tìm kiếm các lệnh, hàm... trong pygame.

> Mình có một điều muốn nhắc với các bạn. Trong bài hướng dẫn có những đoạn code, nếu các bạn còn đang tìm hiểu thì nên tự gõ những đoạn code đó cho quen, hạn chế copy paste nhé!

Nào! Chúng ta cùng bắt đầu thôi!
<br>
<br>
## Cài đặt pygame

Để cài đặt pygame, các bạn có thể dùng `pip`.

Hãy gõ lệnh này trên terminal để cài đặt pygame.

```
pip install pygame
```
Đợi một tí, pygame sẽ tự động được cài.

Để kiểm tra việc cài đặt, các bạn có thể thử `import` thư viện `pygame`. Nếu kết quả hiện ra như sau thì bạn đã cài pygame thành công.
```
>>> import pygame
pygame 2.0.1 (SDL 2.0.14, python 3.7.3)
Hello from the pygame community. https://www.pygame.org/contribute.html
```

<br>
Nếu muốn cập nhật phiên bản mới nhất, các bạn có thể gõ lệnh này:
```
pip install pygame --upgrade
```
<br>

## Tạo của sổ game đầu tiên

Sau khi cài xong pygame, chúng ta cùng tạo tìm hiểu về pygame ngay thôi.

Các bạn hãy tạo một file `.py`, gõ đoạn code này và chạy thử nhé. Mình sẽ giải thích những dòng code đó sau:

```python
import pygame, sys
from pygame.locals import *
pygame.init()

DISPLAYSURF = pygame.display.set_mode((400, 250))
pygame.display.set_caption('Hello world!')

while True:
    for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            sys.exit()
```
<br>
Sau khi chạy đoạn code, bạn sẽ có được kết quả như hình. Nếu có lỗi thì bạn kiểm tra xem có cài pygame thành công chưa nha!

![Kết quả chạy đoạn code trên]({{site.url}}/assets/img/pygame_1/helloworld.png)
<br><br>

Giờ chúng ta tìm hiểu những dòng code thôi nào!

```python
import pygame, sys
from pygame.locals import *
pygame.init()
``` 
Các dòng trên dùng để khai báo, sử dụng các hàm của thư viện pygame. Các bạn không cần quá quan tâm về nó, chỉ cần nhớ thêm những dòng này khi dùng pygame là được.
<br><br>

```python
DISPLAYSURF = pygame.display.set_mode((400, 250))
```
Dòng này dùng để tạo một cửa sổ game. Biến `DISPLAYSURF` đại diện cho cửa sổ game của chúng ta, sau này muốn thao tác gì (vẽ hình, xoá hình,...) thì sẽ thông qua biến này. Biến `DISPLAYSURF` là một biến thuộc kiểu `Surface`, về phần Surface mình sẽ nói sau, hiện tại cứ hiểu `DISPLAYSURF` là cái khung màu đen kia là được. Hàm `pygame.display.set_mode((400, 300))` dùng để tạo cửa sổ game, hay số trong tuple `(400, 300)` là kích thước (chiều rộng, chiều cao) của cửa sổ, đơn vị là **pixel**.
<br><br>

```python
pygame.display.set_caption('Hello world!')
```
Dòng này đơn giản chỉ để tạo cái chữ trên tiêu đề của cửa sổ game.
<br><br>

```python
while True:
    for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            sys.exit()
```
Những dòng này khá phức tạp, mình sẽ nói ở phần tiếp theo (ngay sau đây thôi).

> Được rồi! Các bạn có thể thay đổi chiều rộng, chiều cao, tiêu đề của cửa sổ game và chạy thử nha!

<br>

## Vòng lặp game

Trong phần này, chúng ta sẽ tìm hiểu về vòng lặp game, sự kiện và làm rõ đoạn code còn dang dở ở phần trước.

### Chuyển động trong game được tạo ra như thế nào?

Nói đơn giản thì chuyển động trong game cũng giống như trong phim hoạt hình. Tức là để tạo ra một chuyển động, người ta phải "phát" liên tục các hình ảnh. Nếu tốc độ phát này đủ nhanh, mắt người sẽ cảm nhận được đó là một chuyển động nhờ vào hiện tượng lưu ảnh ở mắt. À thôi, hơi lạc đề rồi, quay lại nào! Muốn tạo ra một chuyển động trong game, ta cần phải liên tục "vẽ" các hình ảnh lên cửa sổ game. Muốn làm được việc đó tất nhiên cần một vòng lặp, đó chính là cái `while` trong đoạn code trên, vòng lặp này gọi là **vòng lặp game**.

Giả sử chúng ta muốn một nhân vật di chuyển sang phải, thì phải làm thế nào:
- Bước 1: Xoá những thứ đang có trên màn hình. Vẽ nhân vật lên màn hình
- Bước 2: Điều chỉnh vị trí nhân vật sang phải "một tí" (viết code gì đó để xử lý)
- Bước 3: Quay lại bước 

Xem hình sau để dễ hình dung nha các bạn

![Chuyển động của nhân vật]({{site.url}}/assets/img/pygame_1/animchar.png)
<br>
<br>

Vậy là chúng ta đã thấy được 2 việc cần phải làm trong vòng lặp game đó **"vẽ"** và **"thay đổi"**. Còn một phần quan trọng nữa trong vòng lặp game, đó là **"bắt sự kiện"**. Hãy tìm hiểu về sự kiện ngay sau đây!
<br>
<br>

## Sự kiện

Sự kiện trong game là "một cái gì đó xảy ra" đối với game. Ví dụ như một cái "click chuột", "ấn phím"... Vì vậy, sự kiện là một phần quan trọng trong game, nó giúp người chơi tương tác với những thứ trong game. Nếu không có những sự kiện này thì cái game chẳng khác gì một cái video.

Nào, bây giờ thì nhìn lại đoạn code trong vòng lặp game:
```python
for event in pygame.event.get():
    if event.type == QUIT:
        pygame.quit()
        sys.exit()
```
Đoạn code trên có tác dụng: Khi click vào nút X thì đóng của sổ game.
Nhìn có vẻ hơi rối, nhưng hãy bình tĩnh, phân tích từ từ nào. Đoạn code này được chạy liên tục trong vòng lặp game. Ở vòng `for`, biến `event` sẽ lặp qua các sự kiện có trong `pygame.event.get()`. Bên trong vòng lặp `for`, biến `event` được kiểm tra xem có phải là sự kiện `QUIT` hay không, nếu đúng thì tắt cửa sổ game và chương trình.

Quay lại ví dụ về nhân vật, nếu nhân vật chỉ chuyển động như vậy thì nó không phải là game, chúng ta cần phải điều khiển được nhân vật. Giả sử mình muốn cho nhân vật "nhảy lên" khi "click chuột" thì mình phải bắt được sự kiện "click chuột", sau đó viết code để xử lý việc "nhảy lên".

Phần sự kiện này rất quan trọng, mình sẽ có một phần riêng để nói về cái này.

Vậy là chúng ta đã tìm hiểu được cơ bản về vòng lặp game. **Tóm lại**, trong vòng lặp game có 3 việc chính: vẽ, bắt sự kiện, thay đổi đối tượng.

![Vòng lặp game]({{site.url}}/assets/img/pygame_1/gameloop.png)

> Những cái này có thể hơi khó hiểu với các bạn lần đầu học lập trình game. Đừng quá lo lắng, các bạn có thể đọc lại nhiều lần, tìm hiểu thêm ở nhiều nguồn khác nhau, hoặc làm nhiều rồi sẽ quen thôi!

<br>

## Vẽ thử vài thứ lên cửa sổ

Đáng lẽ ra bài viết đã kết thúc rồi, nhưng mình thấy chúng ta chưa có được thành quả gì, chỉ là một cái cửa sổ trống. Nên mình sẽ thêm một vài dòng code để vẽ vài thứ lên cửa sổ, cho có thêm hứng thú ấy mà.

Các bạn thêm vào vòng lặp game một vài dòng code nha!
```python
while True:
    for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            sys.exit()
    
    DISPLAYSURF.fill((255, 255, 255))
    pygame.draw.rect(DISPLAYSURF, (255, 0, 0), (100, 80, 150, 50))
    pygame.display.update()
```
<br>
Đây là kết quả:

![Vẽ vài thứ]({{site.url}}/assets/img/pygame_1/draw.png)

Vậy là chúng ta đã vẽ được một hình chữ nhật đỏ trên nền trắng rồi. Còn về phần những đoạn code đó thì mình sẽ giải thích ở bài hướng dẫn tiếp theo.
<br>
<br>
## Tổng kết

Vậy là bài hướng dẫn này đã kết thúc. Xem lại chúng ta đã làm được gì nào!
- Cài đặt pygame
- Tạo một cửa sổ
- Tìm hiểu về vòng lặp game, cách tạo chuyển động trong game, sự kiện
- Vẽ được cái gì đó lên cửa sổ game

Cảm ơn các bạn đã theo dõi! Hẹn gặp lại ở những bài hướng dẫn tiếp theo.
