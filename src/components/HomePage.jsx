import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModuleChecker from "./ModuleChecker";
import Parameter from "./Parameter";
import Button from "./shared/Button";


function HomePage() {
  const [formData, setFormData] = useState({
    diskIO: '',
    memoryUsage: '',
    networkTraffic: '',
    osVersion: '',
    deviceVersion: '',
    service: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (label, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [label]: value,
    }));
  };

  const handleSubmit = () => {
    navigate('/dashboard', { state:formData });
  };

  return (
    <div>
      <ModuleChecker>
        <Parameter label='Disk I/O' onInputChange={handleInputChange} />
        <Parameter label='Memory Usage' onInputChange={handleInputChange} />
        <Parameter label='Network traffic' onInputChange={handleInputChange} />
        <Parameter label='OS version' onInputChange={handleInputChange} />
        <Parameter label='Device version' onInputChange={handleInputChange} />
        <Parameter label='Service' onInputChange={handleInputChange} />
        <Button onClick={handleSubmit} label='Submit' />
      </ModuleChecker>
    </div>
  );
}

export default HomePage
