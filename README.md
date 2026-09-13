# 🚀 Dev Stack

Dev Stack is a modern and responsive technology stack builder for developers. It allows users to explore popular technologies, view technology details, and select their favorite tools to create a personalized development stack.

## 🌐 Live Website

[Dev Stack](https://endearing-cendol-960138.netlify.app/)


## 🛠️ Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- DaisyUI
- React-Toastify
- React Icons
- JSON
- Vite

## ✨ Features

### 1. Explore Technologies

Users can explore different technologies with their names, descriptions, categories, ratings, badges, and difficulty levels.

### 2. Build a Personal Stack

Users can add their favorite technologies to create their own personalized technology stack.

### 3. Manage Selected Technologies

Users can remove individual technologies or clear all selected technologies. Toast notifications are also shown when a technology is added successfully.

---

## 📚 React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX is an HTML-like syntax used inside JavaScript or TypeScript. It helps developers write and understand React user interfaces more easily.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to store and update data in a React component.

In this project, it is used in the `AvailableStack` component to store the selected technologies.

```tsx
const [selectedStacks, setSelectedStacks] = useState<IStack[]>([]);

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform side effects in a React component, such as fetching or loading data.

In this project, I used `useEffect` to load the technology data from the JSON file when the component first renders.

```tsx
useEffect(() => {
  setStacks(technologyData);
}, []);

### 5. Why does every item in a `.map()` list need a unique `key` prop?

TThe `key` prop helps React identify each item in a list. It allows React to efficiently update, add, or remove items when the list changes.

```tsx
{stacks.map((stack) => (
  <StackCard key={stack.id} stack={stack} />
))}

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI elements based on a condition.

In this project, I used conditional rendering to change Button Border and background color when user click `Add to Stack`.

```tsx
<div className={` p-4 rounded-xl ${isSelected === true ? "border-2 border-[#d91b7db2]" : "border-2 border-gray-300"}`}>
      <div className="flex justify-between items-center">
        <img className="h-[40px] w-[40px]" src={stack.icon} alt="logo"></img>
        <button className="bg-[#E0F2FE] text-[#0EA5E9] rounded-4xl py-1 px-5">
          {stack.badge}
        </button>
<div>

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component through props.

A child component can send information or trigger an action in the parent by calling a function received through props.


## 👨‍💻 Author

### Developed by MD. Mridul Ali


