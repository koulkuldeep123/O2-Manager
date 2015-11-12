<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>O2 Kanban SLA Tracker</title>





    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/sb-admin.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/jquery.datetimepicker.css">
    

    <!-- Morris Charts CSS -->
    <link href="css/plugins/morris.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

</head>

<body>

    <div id="wrapper">

        <?php include("navigation.php"); 

            require_once 'includes/requestclass.php';
           
            

        ?>
        <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav  side-nav">
                    <li>
                        <a href="index.php"><i class="fa fa-fw fa-dashboard"></i> Dashboard</a>
                    </li>
                    <li>
                        <a href="tickets.php"><i class="fa fa-fw fa-pencil-square-o"></i> Enter ticket details</a>
                    </li>
                     <li class="active">
                        <a href="editwr.php"><i class="fa fa-fw fa-pencil"></i> Edit ticket details</a>
                    </li>
                    <li>
                        <a href="export/kanbansla-detail.php"><i class="fa fa-fw fa-file-excel-o"></i> Export Sheet</a>
                    </li>
                    <li>
                        <a href="import2.php"><i class="fa fa-fw fa-upload"></i> Import</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </nav>

        <div id="page-wrapper">

            
            <div class="container-fluid" id="fullheight">
            <?php
            if(isset($_GET['msg']))
              {
                ?><div class="alert alert-success"><?php echo base64_decode($_GET['msg']); ?></div><?php 
              }
             ?>
            <!-- Page Heading -->
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">
                                Edit <small>Ticket Details</small>
                        </h1>
                    </div>
                </div>
            
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-2 col-md-offset-2">
                
                <div class="row">
                    <div class="col-lg-12">
                        <h2>Work Request Table</h2>
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Ticket Ref</th>
                                        <th>Dev Name</th>
                                        <th>Service</th>
                                        <th>Net Time Spent</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody id='pageData'>
                                     
                                        <?php 
                                            $db = new SlaTracker();
                                            $query="select id,ticketRef,netTimeSpent,service,devname from tickets order by id desc";
                                            $res=mysql_query($query);
                                            $i=0;
                                            while($row=mysql_fetch_array($res))
                                            {
                                                echo '<tr id="'.$i.'">';
                                                echo '<td>'. $row['ticketRef']. '</td>';
                                                 echo '<td>'. $row['devname']. '</td>';
                                                echo '<td>'. $row['service']. '</td>';
                                                echo '<td>'. $row['netTimeSpent']. '</td>';
                                               
                                                echo '<td><a href="editrw.php?id='.$row['id'].'"><i class="fa fa-fw fa-pencil"></i></a></td>';
                                                echo '</tr>';
                                                $i+=1;
                                            ?>
                                        
                                        <?php
                                            }
                                        ?>
                                     
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </div>


            </div>
            <!-- /.container-fluid -->

        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->
    <script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
    <script type="text/javascript" src="js/jquery.datetimepicker.js"></script>
    <script type="text/javascript" src="js/jquery.validate.min.js"></script>
    <script type="text/javascript" src="js/plugin.js"></script>
    <script type="text/javascript" src="js/slaScript.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <script>
        var tablecount=<?php echo json_encode($i) ?>;
        
        var pagecount=Math.ceil(tablecount/5);



    </script>

</body>

</html>
