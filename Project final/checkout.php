<?php




$host = "localhost";  
$username = "f32ee";  
$password = "f32ee";  
$database = "project";  

$selectedSeatsCount = $_POST['selectedSeatsCount'];
$selectedSeatIds = $_POST['selectedSeatIds'];
$selectedSeatsInput = $_POST['selectedSeatsInput'];
$movie_id = $_POST['movie_id'];
$cinema_id = $_POST['cinema_id'];
$session_id = $_POST['session_id'];


$conn = new mysqli($host, $username, $password, $database);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$movie_id = $_POST['movie_id'];
$cinema_id = $_POST['cinema_id'];
$session_id = $_POST['session_id'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $selectedSeats = explode(',', $_POST['selectedSeatsInput']);
    foreach ($selectedSeats as $seatId) {
        
        $stmt = $conn->prepare("SELECT * FROM seat_status WHERE seat_id = ? AND status = 'free' AND movie_id = ? AND cinema_id = ? AND session_id = ?");
        $stmt->bind_param("siii", $seatId, $movie_id, $cinema_id, $session_id);
        $stmt->execute();
        $result = $stmt->get_result();
        $seat = $result->fetch_assoc();

        if ($seat) {
            
            $updateStmt = $conn->prepare("UPDATE seat_status SET status = 'booked' WHERE seat_id = ? AND movie_id = ? AND cinema_id = ? AND session_id = ?");
            $updateStmt->bind_param("siii", $seatId, $movie_id, $cinema_id, $session_id);
            $updateStmt->execute();
            
        } else {
            
            
            echo "Error: Seat $seatId is already booked.";
            exit;
        }
    }
    
}

$conn->close();


session_start();
 
$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

 
$seat_id = $_POST['seat_id'];
$ticket_num = $_POST['ticket_num'];
$ticket_price = $_POST['ticket_price_payment'];
$Email = $_POST['Email'];
$PhoneNumber = $_POST['PhoneNumber'];
$showtimeString = $_POST['showtimeString'];
$MovieName = $_POST['moviename'];
$Place = $_POST['CinemaPlace'];
$Username = $_SESSION['validuser'];

 
$sql = "INSERT INTO bookings (seat_id, ticket_num, ticket_price, Email, PhoneNumber, showtimeString, moviename, Place, Username) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("siissssss", $seat_id, $ticket_num, $ticket_price, $Email, $PhoneNumber,$showtimeString, $MovieName, $Place, $_SESSION['validuser']);

if ($stmt->execute()) {
     
    echo "<html><body>";
    echo "<script type='text/javascript'>";
    echo "alert('Booking successfully!');";  
    echo "window.location.href = 'home.php';";  
    echo "</script>";
    echo "</body></html>";
} else {
    echo "Error: " . $conn->error;
}

 
$conn->close();
?>
