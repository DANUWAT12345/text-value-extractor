# Text-Value Input Calculator & Extractor

A React application that processes text input to calculate totals and display a detailed billing summary.

## Application Overview

This application allows users to input lines of text with numbers and descriptions. It calculates the totals for each item and displays a billing summary in a table format. It also provides input validation and error handling.

## Components

### `FormikInput`

Handles the form input, validation, and submission.

**Key Features:**

- **Input Parsing:** Users can enter lines of text where each line contains a number and a description.
- **Validation:** Checks if the input format is correct. Alerts users if the format is invalid.
- **Calculation:** Evaluates mathematical expressions, sums the values, and prepares the data for the billing summary.

**Usage:**

1. **Enter Input:** 
   - Input text in the format: `[number] [description]` (e.g., `100 food`, `200/2 transport`).
   - Supported operations include `+`, `-`, `*`, `/` (e.g., `100+50`, `200/2`).

2. **Submit Input:** 
   - Click the "Submit" button to process the input.
   - The application will calculate the totals and display a billing summary.

3. **Reset Data:** 
   - Click the "Reset" button to clear all input and reset the billing summary.

4. **Handling Incorrect Input:** 
   - If the input format is incorrect (e.g., `100cat`), an alert will notify you of the error.

### `BillingSummary`

Displays a detailed billing summary in a table format.

**Key Features:**

- **Table Display:** Shows the item name, price, subtotal, and total amount.
- **Subtotal Calculation:** Each item's subtotal is the cumulative sum of the item prices up to that line.
- **Total Calculation:** Displays the overall total amount.

**Usage:**

- **Item Name:** The description of the item, formatted with the first letter capitalized.
- **Price:** The value of the item as provided in the input.
- **Subtotal:** The running total for each item.
- **Total:** The final sum of all item subtotals.

**Example Output:**

If the input is:

100 food
200/2 drink
-50 service

The output table will look like this:

| Item Name | Price | Subtotal | Total |
|-----------|-------|----------|-------|
| Food      | 100.00 ฿ | 100.00 ฿ | 100.00 ฿ |
| Drink     | 100.00 ฿ | 200.00 ฿ | 200.00 ฿ |
| Service   | -50.00 ฿ | 150.00 ฿ | 150.00 ฿ |

**Total: 150.00 ฿**

## Summary of Functions

1. **`FormikInput` Component:**
   - Validates input format.
   - Calculates values based on mathematical expressions.
   - Alerts for invalid input formats.
   - Submits data and updates the billing summary.

2. **`BillingSummary` Component:**
   - Renders a table with item names, prices, subtotals, and total amount.
   - Displays a summary of calculated values.

This application provides a straightforward interface for managing and summarizing financial or numerical data input by users.

Author
Danuwat M.

______________________

# เครื่องคำนวณและการแยกข้อมูลจากข้อความ

แอปพลิเคชัน React ที่ประมวลผลการป้อนข้อความเพื่อคำนวณยอดรวมและแสดงสรุปใบเสร็จรายละเอียด

## ภาพรวมของแอปพลิเคชัน

แอปพลิเคชันนี้อนุญาตให้ผู้ใช้ป้อนบรรทัดของข้อความที่มีตัวเลขและคำอธิบาย แอปพลิเคชันจะคำนวณยอดรวมสำหรับแต่ละรายการและแสดงสรุปใบเสร็จในรูปแบบตาราง นอกจากนี้ยังมีการตรวจสอบความถูกต้องของข้อมูลและการจัดการข้อผิดพลาด

## คอมโพเนนต์

### `FormikInput`

จัดการการป้อนข้อมูล การตรวจสอบความถูกต้อง และการส่งข้อมูล

**คุณสมบัติหลัก:**

- **การแยกข้อมูลป้อนเข้า:** ผู้ใช้สามารถป้อนข้อความที่มีตัวเลขและคำอธิบายในแต่ละบรรทัด
- **การตรวจสอบความถูกต้อง:** ตรวจสอบว่า รูปแบบของข้อมูลถูกต้องหรือไม่ และจะแจ้งเตือนผู้ใช้หากรูปแบบไม่ถูกต้อง
- **การคำนวณ:** ประเมินนิพจน์ทางคณิตศาสตร์ บวกค่าต่าง ๆ และเตรียมข้อมูลสำหรับการสรุปใบเสร็จ

**วิธีการใช้งาน:**

1. **ป้อนข้อมูล:** 
   - ป้อนข้อความในรูปแบบ: `[number] [description]` (เช่น `100 food`, `200/2 transport`)
   - การดำเนินการที่รองรับได้แก่ `+`, `-`, `*`, `/` (เช่น `100+50`, `200/2`)

2. **ส่งข้อมูล:** 
   - คลิกปุ่ม "Submit" เพื่อประมวลผลข้อมูล
   - แอปพลิเคชันจะคำนวณยอดรวมและแสดงสรุปใบเสร็จ

3. **รีเซ็ตข้อมูล:** 
   - คลิกปุ่ม "Reset" เพื่อล้างข้อมูลทั้งหมดและรีเซ็ตสรุปใบเสร็จ

4. **จัดการข้อผิดพลาดของข้อมูล:** 
   - หากรูปแบบข้อมูลไม่ถูกต้อง (เช่น `100cat`), จะมีการแจ้งเตือนข้อผิดพลาด

### `BillingSummary`

แสดงสรุปใบเสร็จรายละเอียดในรูปแบบตาราง

**คุณสมบัติหลัก:**

- **การแสดงผลในตาราง:** แสดงชื่อรายการ ราคา ยอดย่อย และยอดรวม
- **การคำนวณยอดย่อย:** ยอดย่อยของแต่ละรายการจะเป็นผลรวมสะสมของราคาแต่ละรายการจนถึงบรรทัดนั้น
- **การคำนวณยอดรวม:** แสดงยอดรวมทั้งหมด

**วิธีการใช้งาน:**

- **ชื่อรายการ:** คำอธิบายของรายการ ซึ่งจะมีตัวอักษรตัวแรกเป็นตัวพิมพ์ใหญ่
- **ราคา:** ค่าของรายการตามที่ระบุในข้อมูล
- **ยอดย่อย:** ยอดรวมสะสมสำหรับแต่ละรายการ
- **ยอดรวม:** ผลรวมสุดท้ายของยอดย่อยทั้งหมด

**ตัวอย่างผลลัพธ์:**

หากข้อมูลที่ป้อนคือ:

100 food
200/2 drink
-50 service

ตารางผลลัพธ์จะเป็น:

| ชื่อรายการ | ราคา | ยอดย่อย | ยอดรวม |
|-------------|-------|---------|---------|
| Food        | 100.00 ฿ | 100.00 ฿ | 100.00 ฿ |
| Drink       | 100.00 ฿ | 200.00 ฿ | 200.00 ฿ |
| Service     | -50.00 ฿ | 150.00 ฿ | 150.00 ฿ |

**ยอดรวม: 150.00 ฿**

## สรุปฟังก์ชัน

1. **คอมโพเนนต์ `FormikInput`:**
   - ตรวจสอบรูปแบบข้อมูล
   - คำนวณค่าตามนิพจน์ทางคณิตศาสตร์
   - แจ้งเตือนสำหรับรูปแบบข้อมูลที่ไม่ถูกต้อง
   - ส่งข้อมูลและอัปเดตสรุปใบเสร็จ

2. **คอมโพเนนต์ `BillingSummary`:**
   - แสดงตารางที่มีชื่อรายการ ราคา ยอดย่อย และยอดรวม
   - แสดงสรุปของค่าที่คำนวณ

แอปพลิเคชันนี้ให้ส่วนติดต่อที่ใช้งานง่ายสำหรับการจัดการและสรุปข้อมูลทางการเงินหรือตัวเลขที่ป้อนโดยผู้ใช้

**ผู้เขียน:**  
Danuwat M.


