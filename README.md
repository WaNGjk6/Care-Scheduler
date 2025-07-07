# 看护时间计算器 (Care Scheduler)

这是一个用于计算和安排看护时间的Web应用程序。

## ✨ 功能

*   **日期计算器**: 计算两个日期之间的天数、周数或月数。
*   **排班计划**: 计算看护时段的排班表。
*   **响应式设计**: 适配桌面和移动设备。

## 🛠️ 技术栈

*   **前端**:
    *   [React](https://reactjs.org/)
    *   [React Router](https://reactrouter.com/)
    *   [Vite](https://vitejs.dev/)
    *   [Tailwind CSS](https://tailwindcss.com/)
*   **后端**:
    *   [Express.js](https://expressjs.com/)
    *   [MySQL2](https://github.com/sidorares/node-mysql2)

## 🚀 安装与运行

1.  **克隆仓库**
    ```
    git clone 
    ```

2.  **安装依赖**
    使用 npm 安装项目所需的所有依赖项。
    ```bash
    npm install
    ```

3.  **运行开发服务器**
    此命令将启动 Vite 开发服务器，通常在 `http://localhost:5173`。
    ```bash
    npm run dev
    ```

4.  **构建生产版本**
    此命令会将项目打包到 `dist` 目录中，以备部署。
    ```bash
    npm run build
    ```

5.  **本地预览生产版本**
    此命令会在本地启动一个服务器，以预览构建后的生产版本。
    ```bash
    npm run preview
    ```

## 📜 可用脚本

在 `package.json` 文件中，你可以找到以下脚本：

*   `npm run dev`: 在开发模式下启动应用程序。
*   `npm run build`: 为生产环境构建应用程序。
*   `npm run preview`: 在本地预览生产构建。
