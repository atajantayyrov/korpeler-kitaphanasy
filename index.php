<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css" />
    <link rel="icon" href="img/logo_H8J_icon.ico" type="image/x-icon" />
    <title>körpejeler-kitaphanasy</title>
  </head>
  <body>
  <?php include 'web-parts/header.php'; ?>
    <main class="main">
      <?php include 'web-parts/mainslider.php'; ?>
      <?php include 'web-parts/book-categories.php'; ?>
      <?php include 'web-parts/favorites.php'; ?>
      <?php include 'web-parts/bestsellers.php'; ?>
      <?php include 'web-parts/categories.php'; ?>
      <?php include 'web-parts/book-review.php'; ?>
      <?php include 'web-parts/category-list.php'; ?>
      <?php include 'web-parts/editor-selection.php'; ?>
      <?php include 'web-parts/advertisement.php'; ?>
      <?php include 'web-parts/contactus.php'; ?>
    </main>
    <?php include 'web-parts/footer.php'; ?>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="js/common.js"></script>
    <script src="js/custom-select.js"></script>


  </body>
</html>