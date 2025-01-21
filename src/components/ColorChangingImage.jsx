"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import styles from "./ColorChangingImage.module.css"

export default function ColorChangingImage() {
  const [currentColor, setCurrentColor] = useState("normal")

  const changeColor = (color) => {
    setCurrentColor(color)
  }

  const getImageFilter = () => {
    switch (currentColor) {
      case "pink":
        return "hue-rotate(330deg) saturate(150%)"
      case "blue":
        return "hue-rotate(180deg) saturate(150%)"
      case "cyan":
        return "hue-rotate(150deg) saturate(150%)"
      default:
        return "none"
    }
  }

  return (
    <div className={styles.header9}>
      <div className={styles.header9main}>
        <div className={styles.main9left}>
          <Image
            src="/headerstol.jpg"
            alt="Header Stol"
            width={500}
            height={500}
            style={{ filter: getImageFilter() }}
          />
        </div>
        <div className={styles.mainright9}>
          <h1>Unique Features Of leatest &amp; Trending Poducts</h1>
          <div className={styles.radius}>
            <Button className={`${styles.yumoloq} ${styles.pink}`} onClick={() => changeColor("pink")} />
            <p>All frames constructed with hardwood solids and laminates</p>
          </div>
          <div className={styles.radius}>
            <Button className={`${styles.yumoloq} ${styles.blue}`} onClick={() => changeColor("blue")} />
            <p>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</p>
          </div>
          <div className={styles.radius}>
            <Button className={`${styles.yumoloq} ${styles.cyan}`} onClick={() => changeColor("cyan")} />
            <p>Arms, backs and seats are structurally reinforced</p>
          </div>
          <Button className={styles.mainbtn}>Add To Cart</Button>
        </div>
      </div>
    </div>
  )
}

