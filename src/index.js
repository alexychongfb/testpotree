import React from 'react';
import './styles.css';
import './potree.css';
window.Potree = require('achong-potree').Potree;
const THREE = require('three');

const MyComponent = () => {
    console.log(Potree);
    var viewer = new Potree.Viewer(
        document.getElementById('potree_render_area'),
      );
    // POINTCLOUD
    Potree.loadPointCloud(
        'https://s3-us-west-2.amazonaws.com/usgs-lidar-public/ARRA-CA_GoldenGate_2010/ept.json',
        'sigeom.sa',
        function(e) {
          let scene = viewer.scene;
          scene.addPointCloud(e.pointcloud);
  
          let material = e.pointcloud.material;
          material.size = 1;
          material.pointSizeType = Potree.PointSizeType.ADAPTIVE;
  
          try { viewer.fitToScreen(); } catch (e) { }
          console.log(scene);
        },
      );
    
    return <div />;
};
export default MyComponent;