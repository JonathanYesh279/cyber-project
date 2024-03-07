import ModuleChecker from "./ModuleChecker";
import Parameter from "./Parameter";
import Button from "./shared/Button";


function HomePage() {
  return (
    <div>
      <ModuleChecker>
        <Parameter label='Disk I/O' />
        <Parameter label='Memory Usage' />
        <Parameter label='Network traffic' />
        <Parameter label='OS version' />
        <Parameter label='Device version'/>
        <Parameter label='Service'/>
        <Button />
      </ModuleChecker>
    </div>
  );
}

export default HomePage
