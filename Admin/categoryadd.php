<?php
include "header.php";
include "slider.php";
include "class/category_class.php";
?>
<?php
$category = new category;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $category_name = $_POST['category_name'];
    $insert_category = $category->insert_category($category_name);
}
var_dump($category_name);
?>

<div class="right-admin-content">
    <div class="right-admin-content-category_add">
        <h1>Thêm Danh Mục</h1>
        <form action="" method="POST">
            <input type="text" name="" id="" placeholder="Nhập tên danh mục">
            <button type="submit">Thêm</button>
        </form>
    </div>
</div>
</section>
<footer>

</footer>
</body>

</html>