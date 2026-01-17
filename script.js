* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  color: white;
  overflow-x: hidden;
  background: linear-gradient(270deg, #ff758c, #ff7eb3, #a18cd1);
  background-size: 600% 600%;
  animation: bg 12s ease infinite;
}

@keyframes bg {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.screen {
  display: none;
  min-height: 100vh;
  padding: 40px 20px;
  text-align: center;
}

.screen.active {
  display: block;
}

.buttons {
  margin-top: 30px;
}

button {
  padding: 14px 34px;
  font-size: 18px;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}

button.yes {
  background: white;
  color: #ff5f8f;
  font-weight: bold;
}

button.yes:hover {
  transform: scale(1.1);
}

button.no {
  background: rgba(255,255,255,0.3);
  color: white;
}

.text {
  max-width: 720px;
  margin: 30px auto;
  line-height: 1.7;
  text-align: left;
}

.love {
  text-align: center;
  font-size: 24px;
  margin-top: 40px;
}

.fade-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 1s forwards;
}

.delay {
  animation-delay: 0.5s;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* СЕРДЕЧКИ */
.hearts span {
  position: fixed;
  bottom: -10px;
  font-size: 20px;
  animation: fly 6s linear infinite;
}

@keyframes fly {
  to {
    transform: translateY(-110vh);
    opacity: 0;
  }
}
