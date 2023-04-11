#include <ros/ros.h>
#include <std_msgs/Int32.h>

int main(int argc, char** argv)
{
    ros::init(argc, argv, "camera_publisher");
    ros::NodeHandle nh;

    ros::Publisher car_count_pub = nh.advertise<std_msgs::Int32>("car_count", 10);

    ros::Rate loop_rate(10);

    while (ros::ok())
    {
        // Simulate car detection and count
        int car_count = 0; // Replace with real detection method

        std_msgs::Int32 msg;
        msg.data = car_count;

        car_count_pub.publish(msg);

        ros::spinOnce();
        loop_rate.sleep();
    }

    return 0;
}
