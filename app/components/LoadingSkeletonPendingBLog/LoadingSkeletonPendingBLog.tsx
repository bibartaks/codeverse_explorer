import React from "react"
import styles from "./LoadingSkeletonPendingBLog.module.css"

export default function LoadingSkeletonPendingBLog() {
  return (
    <div className={`h-[250px] bg-white p-5 mb-5 ${styles.skeleton_card}`}>
      <h1
        className={`w-[200px] h-[40px] bg-gray-300 mb-5 ${styles.skeleton}`}
      ></h1>
      <p
        className={`w-[100px] h-[30px] bg-gray-300 mb-5 ${styles.skeleton}`}
      ></p>
      <p className={`w-[100%] h-[100px] bg-gray-300 ${styles.skeleton}`}></p>
    </div>
  )
}
