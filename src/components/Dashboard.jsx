import React from 'react'
import { useLocation } from 'react-router-dom';
import Module from './Module';

function Dashboard() {
  const { state } = useLocation();
  const { formData } = state || {};

  return (
    <div className='dash-board-body'>
      <Module
        title='Disk Usage Statistics'
        data={[
          `Total disk space: ${formData?.diskIO}`,
          `Used space: ${formData?.memoryUsage}`,
          `Free space: ${formData?.networkTraffic}`,
        ]}
      />
      <Module
        title='File System Information'
        data={[
          `File system type: ${formData?.osVersion}`,
          `Disk partition layout: ${formData?.deviceVersion}`,
        ]}
      />
      <Module
        title='Disk Performance Metrics'
        data={[
          `Read/Write speeds: ${formData?.service}`,
          `IOPS: ${formData?.service}`,
        ]}
      />
      <Module
        title='Memory Usage'
        data={[
          `Total physical memory: ${formData?.diskIO}`,
          `Available memory:  ${formData?.memoryUsage}`,
          `Running processes: ${formData?.networkTraffic}`,
        ]}
      />

      <Module
        title='Memory Allocation Statistics'
        data={[
          `Memory usage by application: ${formData?.osVersion}`,
          `Available memory:  ${formData?.memoryUsage}`,
          `Memory leaks: ${formData?.deviceVersion}`,
        ]}
      />

      <Module
        title='Network Traffic'
        data={[
          `Active hosts: ${formData?.service}`,
          `Protocols: ${formData?.service}`,
          `Traffic analysis: ${formData?.service}`,
        ]}
      />

      <Module
        title='OS Version'
        data={[
          `Operating system: ${formData?.diskIO}`,
          `Architecture: ${formData?.memoryUsage}`,
          `Patch level: ${formData?.networkTraffic}`,
        ]}
      />

      <Module
        title='Device Version'
        data={[
          `Hardware model: ${formData?.osVersion}`,
          `Firmware version: ${formData?.deviceVersion}`,
          `Vendor-specific information: ${formData?.service}`,
        ]}
      />

      <Module
        title='Service'
        data={[
          `Service identification: ${formData?.service}`,
          `Service version: ${formData?.service}`,
          `Service configuration: ${formData?.service}`,
        ]}
      />
    </div>
  );
}

export default Dashboard
