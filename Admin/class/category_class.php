<?php
include "database.php";
?>

<?php
class category
{
    private $db;

    public function __construct()
    {
        $this->db = new Database();
    }
    public function insert_category($category_name)
    {
        $query = "INSERT INTO tbl_category (category_name) VALUES ('$category_name')";
        $result = $this->db->insert($query);
        return $result;
    }
}
?>