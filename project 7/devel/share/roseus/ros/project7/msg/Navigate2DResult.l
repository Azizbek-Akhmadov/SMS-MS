;; Auto-generated. Do not edit!


(when (boundp 'project7::Navigate2DResult)
  (if (not (find-package "PROJECT7"))
    (make-package "PROJECT7"))
  (shadow 'Navigate2DResult (find-package "PROJECT7")))
(unless (find-package "PROJECT7::NAVIGATE2DRESULT")
  (make-package "PROJECT7::NAVIGATE2DRESULT"))

(in-package "ROS")
;;//! \htmlinclude Navigate2DResult.msg.html


(defclass project7::Navigate2DResult
  :super ros::object
  :slots (_elapsed_time ))

(defmethod project7::Navigate2DResult
  (:init
   (&key
    ((:elapsed_time __elapsed_time) 0.0)
    )
   (send-super :init)
   (setq _elapsed_time (float __elapsed_time))
   self)
  (:elapsed_time
   (&optional __elapsed_time)
   (if __elapsed_time (setq _elapsed_time __elapsed_time)) _elapsed_time)
  (:serialization-length
   ()
   (+
    ;; float32 _elapsed_time
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; float32 _elapsed_time
       (sys::poke _elapsed_time (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; float32 _elapsed_time
     (setq _elapsed_time (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;;
   self)
  )

(setf (get project7::Navigate2DResult :md5sum-) "bc43e16eec5aeba078e3c28e74b0e8c1")
(setf (get project7::Navigate2DResult :datatype-) "project7/Navigate2DResult")
(setf (get project7::Navigate2DResult :definition-)
      "# ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
# Result
float32 elapsed_time

")



(provide :project7/Navigate2DResult "bc43e16eec5aeba078e3c28e74b0e8c1")


