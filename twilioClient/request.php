<?php
header('Content-type: text/xml');
?>
<Response>
    <Dial callerId="+17752563321"><?php echo $_POST['To'];?></Dial>
</Response>