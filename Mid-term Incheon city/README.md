
The initial functionality offered by the client-and-server nodes in C++ is comparable to the features provided in project #5 of the smart mobility service course. However, in this case, we will develop a service in which the ROS service client node transmits the GPS location of the autonomous vehicle, and the ROS service server returns the current weather status.

Additionally, the publisher-and-subscriber nodes' second functionality is similar to the exercise project #4 in the smart mobility service course. Nevertheless, we will establish a publisher so that the ROS publisher node can transmit the autonomous vehicle's speed. Consequently, the ROS subscriber (in Python) node will display the plate number of the autonomous vehicle when the vehicle's speed surpasses the speed limit value (speed_limit parameter), which is measured in kilometers per hour (K/H).

It is important to note that the program included a launch file that facilitates the automatic execution of the subscriber and publisher nodes while also setting the speed_limit server parameter's value.

## weatherCallback

This code creates a ROS service server that listens to a service called "weather_service". When a request is received, the weatherCallback function is called, which simply prints the current weather status.

## publisher

This code creates a ROS publisher that publishes the speed of the vehicle to a topic called "speed_topic". In this example, the speed is incremented by 0.1 every iteration of the loop, but in a real-world scenario, the speed would be obtained from the autonomous vehicle's sensors.

##subscriber

This code creates a ROS subscriber that listens to the "speed_topic" topic and calls the callback function when a message is received. If the speed in the message exceeds the speed_limit parameter (which is obtained from the ROS parameter server), the plate number of the vehicle is sent to the "speed_monitor" dynamic reconfigure server. Otherwise, a message is simply logged to the console.

##speed_limit

To launch the subscriber and publisher nodes, and set the value of the speed_limit parameter, you can create a launch file like this:
