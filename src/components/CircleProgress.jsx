import { Cell, Pie, PieChart } from 'recharts';

const data = [
  { name: 'Group A', value: 750 },
  { name: 'Group B', value: 100 },
  { name: 'Group C', value: 150 },
];

const COLORS = ['#3b3509', '#796b0b', '#fbbf3c'];

export default function Example() {
  return (
    <div className="relative w-full max-w-[225px] aspect-square mx-auto">
      
      <PieChart width={225} height={225}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={75}   
          outerRadius={110} 
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          startAngle={220}
          endAngle={-140}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[22px] font-regular montserrat text-center pointer-events-none">
        Total<br />1908
      </div>

    </div>
  );
}
