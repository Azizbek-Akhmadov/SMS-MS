
The initial functionality offered by the client-and-server nodes in C++ is comparable to the features provided in project #5 of the smart mobility service course. However, in this case, we will develop a service in which the ROS service client node transmits the GPS location of the autonomous vehicle, and the ROS service server returns the current weather status.

Additionally, the publisher-and-subscriber nodes' second functionality is similar to the exercise project #4 in the smart mobility service course. Nevertheless, we will establish a publisher so that the ROS publisher node can transmit the autonomous vehicle's speed. Consequently, the ROS subscriber (in Python) node will display the plate number of the autonomous vehicle when the vehicle's speed surpasses the speed limit value (speed_limit parameter), which is measured in kilometers per hour (K/H).

It is important to note that the program included a launch file that facilitates the automatic execution of the subscriber and publisher nodes while also setting the speed_limit server parameter's value.

**weatherCallback**