import cv2
import os


focus =255  # min: 0, max: 255, increment:5


# Create a directory to save captured images
output_directory = r"D:\7th-Sem\SDP\Workpiece Dataset\Val\Non-Defective"
os.makedirs(output_directory, exist_ok=True)

# Initialize the camera (you may need to change the camera index)
cap = cv2.VideoCapture(1, cv2.CAP_DSHOW)

# Variable to keep track of captured image count
image_count = 0

while True:
    # cap.set(cv2.CAP_PROP_AUTOFOCUS, 1)
    # Read a frame from the camera
    # focus=int(input("Enter focal number (0 to 255): "))
    ret, frame = cap.read()
    # cap.set(cv2.CAP_PROP_FOCAL_LENGTH, focus) 
    # Display the frame
    # cap.set(28, focus) 
    cv2.imshow('Press p to Capture', frame)

    # Check if the 'C' key is pressed
    key = cv2.waitKey(1) & 0xFF
    if key == ord('p'):
        # Save the captured image
        image_count += 1
        image_filename = os.path.join(output_directory, f'non-defective_{image_count}.jpg')
        cv2.imwrite(image_filename, frame)
        print(f"Image saved as {image_filename}")

    # Break the loop if the 'q' key is pressed
    if key == ord('q'):
        break

# Release the camera and close all OpenCV windows
cap.release()
cv2.destroyAllWindows()