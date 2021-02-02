import React, { Component } from "react";
import '../App.css';

class Post extends Component {
  render() {
    return (
      <div className="post">
        <h1>Identifying Best Practices for CI/CD Infrastructure</h1>
        <h3>Use Version Control (Vadapalli, 2018)</h3>
        <p>Typically a version control system like Git, Bitbucket, or Subversion. It is where project source code is kept in a single place which is often called a shared repository. It allows developers to work on the same project in parallel without troubling when they want to develop new features, make changes, check out source code, or merge it together like a traditional workflow. It benefits directly to members of the development team by enhancing collaboration among team members and contributions. It also provides changes history where you can easily trace back once any issue occurred.</p>
        <h3>Use Credential Management (Belmont, 2018)</h3>
        <p>It is a bad idea to put any credentials directly into the repository and should be very careful not to accidentally expose your passwords. There are several ways to store your passwords and keys when you need to run CI/CD pipeline. Both Jenkins and Travis CI provide useful features to handle this case. For best practices, use CI servers to store your credentials and use them as an environment variable.</p>
        <h3>Use Containers (Krief, 2019)</h3>
        <p>Containers make it simple and effective to build, test, and deploy your applications. Typically, a container is lightweight and portable that comes with the minimal runtime, and all dependencies of the application can be bundled to one container. With a small size of container, it allowed both developers and operations teams deploy new applications much faster than the virtual machine. In addition, any extra procedure of your application or any complicated tasks can be solved easily by Dockerfile.</p>
        <h3>Use the right tools (Davis & Daniels, 2016)</h3>
        <p>There are various tools available in the market at the moment. For instance, Jenkins, Travis CI, GitLab, Circle CI, and more. For best practices, it is always a good idea to start with the requirements and budget of your project first. Some commercial tools might offer a free-plan with limited features where you have to pay extra to get full access and supports. And most importantly is to start looking at both benefits and drawbacks of each tool. However, it depends on many aspects based on your team, and organisation to identify which one is the right one for you. Not only for the continuous integration (CI) tools, but also refer to other tools for instance, version control, configuration management, monitoring tools, and so on.</p>
        <h3>Equality on Test and Production environments (Atkinson & Edwards, 2018)</h3>
        <p>To avoid any conflict oy mismatch configuration, your application is supposed to be deployed in the same environment. For instance, OS version, IDE version, and dependencies package installed. Once the test environment and production environment are matched, both developers and operations teams will have more confidence and can rely on the results when deploying new applications.</p>
        <h3>Test in every build (Vadapalli, 2018)</h3>
        <p>Ideally, the most important thing in the software development process is the software quality. To ensure that your software works properly for its intended purpose. Therefore, your software needs testing before the actual implementation. The smallest test is called unit test which refers to testing on functions and methods. There are several tools for unit test frameworks. For instance, JUnit, and Selenium. Whenever a build starts, you should have confidence that your software will work properly.</p>    
        <h3>Automate Everything (Leszko, 2017)</h3>
        <p>Automation processes can help to eliminate human errors that often occur in the manual processes of software development and deployment. To eliminate errors-prone, deployment should be automated as much as possible to speed up the development process. With an automation script, it enables repeatable and daily tasks to be automated. Moreover, It is better to have a deployment script along with each commit on the version control system.</p>
        <h3>Provide Rollback Plan (Leszko, 2017)</h3>
        <p>Sometimes your application might end up with issues in the production environment. It is better to have a rollback plan ready for every deployment. In the CI/CD pipeline, it can rollback to the previous version easily and effectively. By re-deploy your previous release that was stored on your repository. However, it is also considered as best practices when it combines with some deployment strategies such as Blue-Green deployments. It is an alternative approach to deploy a new application parallel to the existing version without downtime where it benefits directly to the deployment process once rollback is needed. In case of rollback, it is simply to just switch all routes from load balancer back to the previous production environment.</p>
        <h3>Monitoring alert and Feedback (Krief, 2019)</h3>
        <p>One of the core elements for the CI/CD infrastructure is monitoring. The final stage after application has been successfully deployed on the production is continuously monitoring. There are many monitoring tools available such as Prometheus, Grafana, and Nagios. For monitoring your server health and workload. For instance, CPU, Memory, and Disk I/O utilisation. Also refer to activities monitoring for your application. With a centralised dashboard, both developers and operations teams will identify any issue quickly and effectively.</p>
        <h3>Enhance collaboration between Dev and Ops (Belmont, 2018)</h3>
        <p>DevOps is not a complete solution for any organisations. To successfully adopt DevOps practices, it requires a change in cultural shift, people, and technological enablers as well. In particular, development and operation teams should have common goals aligned with business perspectives. To better serve the products to market as quickly as possible.</p>
      </div>
    );
  }
}

export default Post;