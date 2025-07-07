export default function About() {
  const goBlog = () => {
    if (window.confirm('确定要前往我的 Blog 吗？这将会打开你的浏览器并跳转。')) {
      window.open('https://halo.kai666.asia', '_blank');
    }
  };

  return (
    <div className="p-6 text-center space-y-8 max-w-md mx-auto">
      <h1 className="text-3xl font-bold">看护队排班计算</h1>
      <p className="select-none text-lg">作者：WaNG</p>
      <button onClick={goBlog} className="underline">WaNGのBlog</button>
    </div>
  );
}
