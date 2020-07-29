<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link 
    href="https://fonts.googleapis.com/css2?family=Cairo:wght@300&display=swap" 
    rel="stylesheet"
    />
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css" />
    <title>körpejeler-kitaphanasy</title>
  </head>
  <body>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400&display=swap" rel="stylesheet">
    <?php include 'web-parts/header.php'; ?>
    <main class="main">
    <?php include 'web-parts/typesofbooks.php'; ?>
      <?php include 'web-parts/kindsbook.php'; ?>
      <?php include 'web-parts/favorites.php'; ?>
      <?php include 'web-parts/bestsellers.php'; ?>
      <?php include 'web-parts/advanteges.php'; ?>
      <?php include 'web-parts/advice.php'; ?>
      <?php include 'web-parts/advicemenu.php'; ?>
      <?php include 'web-parts/mainbook.php'; ?>
      <?php include 'web-parts/games.php'; ?>
      <?php include 'web-parts/contactus.php'; ?>
    </main>
    <?php include 'web-parts/footer.php'; ?>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="js/common.js"></script>

  </body>
</html>