const cyberSecurityProjects = [
    //1 project
    {
        id: 1,
        title: "DDoS Attack Incident Report",
        sections: [
            {
                name: "Scenario",
                content: (
                    <>
                        <p>
                            You are a cybersecurity analyst working for a multimedia company that offers web design services, 
                            graphic design, and social media marketing solutions to small businesses.
                        </p>
                        <p>
                            Your organization recently experienced a DDoS attack, which compromised the internal network for two hours 
                            until it was resolved. During the attack, your organization’s network services suddenly stopped responding due 
                            to an incoming flood of ICMP packets. Normal internal network traffic could not access any network resources.
                        </p>
                        <p>
                            The incident management team responded by:
                        </p>
                        <ul>
                            <li>Blocking incoming ICMP packets.</li>
                            <li>Stopping all non-critical network services offline.</li>
                            <li>Restoring critical network services.</li>
                        </ul>
                        <p>
                            The cybersecurity team found that a malicious actor had exploited a misconfigured firewall, 
                            allowing an ICMP flood attack. To mitigate future risks, they implemented:
                        </p>
                        <ul>
                            <li>A new firewall rule to limit incoming ICMP packets.</li>
                            <li>Source IP address verification to detect spoofed packets.</li>
                            <li>Network monitoring software for abnormal traffic patterns.</li>
                            <li>An IDS/IPS system to filter suspicious ICMP traffic.</li>
                        </ul>
                    </>
                ),
            },
            {
                name: "Summary",
                content: (
                    <>
                        <p>
                            The company experienced a security event where all network services stopped responding due to a 
                            DDoS attack via a flood of incoming ICMP packets.
                        </p>
                        <p>
                            The cybersecurity team responded by blocking the attack and stopping non-critical network services, 
                            allowing critical services to be restored.
                        </p>
                    </>
                ),
            },
            {
                name: "IDENTIFY",
                content: (
                    <>
                        <p>
                            The incident management team audited systems, devices, and access policies to find security gaps. 
                            They determined that an intern’s login credentials were compromised, 
                            allowing unauthorized access to customer data.
                        </p>
                        <p>
                            The entire internal network was affected. Some customer data was deleted from the database.
                            The priority was securing and restoring all critical resources.
                        </p>
                    </>
                ),
            },
            {
                name: "PROTECT",
                content: (
                    <>
                        <p>
                        <strong>The team implemented security measures to prevent future attacks:</strong>
                        </p>
                        <ul>
                            <li>Multi-factor authentication (MFA).</li>
                            <li>Limiting login attempts to three.</li>
                            <li>Training employees on credential security.</li>
                            <li>Configuring firewalls to limit ICMP traffic.</li>
                            <li>Investing in an Intrusion Prevention System (IPS).</li>
                        </ul>
                    </>
                ),
            },
            {
                name: "DETECT",
                content: (
                    <>
                        <p>
                        <strong>To detect future attacks, the team implemented:</strong>
                        </p>
                        <ul>
                            <li>Firewall logging and an Intrusion Detection System (IDS).</li>
                            <li>Source IP verification for spoofed packets.</li>
                            <li>Network monitoring software for abnormal traffic.</li>
                        </ul>
                    </>
                ),
            },
            {
                name: "RESPOND",
                content: (
                    <>
                        <p>
                            The intern’s account was disabled, and management was informed. Affected customers were notified 
                            by mail about the data breach. Management also reported the incident to law enforcement.
                        </p>
                        <p>
                            Employees were trained on secure credential handling. Future incidents will be handled by 
                            isolating affected systems and analyzing logs for suspicious activity.
                        </p>
                    </>
                ),
            },
            {
                name: "RECOVER",
                content: (
                    <>
                        <p>
                            Deleted customer data was restored from a backup. 
                            Employees were informed that 
                            any changes made earlier that day must be re-entered into the system.
                        </p>
                    </>
                ),
            },
        ],
    },



    //2 project:
    {
        id: 2,
        title: "Vulnerability Assessment Report",
        sections: [
            {
                name: "Scenario",
                content: (
                    <>
                        <p>
                            You are a newly hired cybersecurity analyst for an e-commerce company. Employees regularly query data
                            from a remote database server, but the server has been <strong>publicly accessible</strong> since the company launched.
                        </p>
                        <p>
                            Your task is to assess the <strong>security risks</strong> and propose remediation strategies.
                        </p>
                    </>
                )
            },
            {
                name: "Vulnerability Assessment Report",
                content: (
                    <>
                        <strong>1st January 20XX</strong>
                        <p>
                            <strong>System Description:</strong> The database server runs Linux, MySQL, and uses SSL/TLS encryption.
                            However, it is currently open to the public.
                        </p>
                    </>
                )
            },
            {
                name: "Scope",
                content: (
                    <>
                        <p>
                            The vulnerability assessment covers the <strong>access controls of the system</strong> over a period of 3 months.
                            The analysis follows <strong>NIST SP 800-30 Rev.1</strong> guidelines.
                        </p>
                    </>
                )
            },
            {
                name: "Risk Assessment",
                content: (
                    <>
                        <table style={{ 
                            width: "80%", 
                            maxWidth: "100%", 
                            borderCollapse: "collapse", 
                            margin: "0 auto", 
                            textAlign: "center", 
                            border: "2px solid white",
                            display: "block" }}>

                            <thead>
                                <tr style={{ backgroundColor: "rgba(24, 38, 82, 1)", color: "white", border: "2px solid white" }}>
                                    <th style={{ border: "2px solid white", padding: "8px" }}>Threat Source</th>
                                    <th style={{ border: "2px solid white", padding: "8px" }}>Threat Event</th>
                                    <th style={{ border: "2px solid white", padding: "8px" }}>Likelihood</th>
                                    <th style={{ border: "2px solid white", padding: "8px" }}>Severity</th>
                                    <th style={{ border: "2px solid white", padding: "8px" }}>Risk</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ border: "2px solid white", padding: "8px", backgroundColor: "#333", color: "white" }}>Hacker</td>
                                    <td style={{ border: "2px solid white", padding: "8px", backgroundColor: "#333" }}>Obtain sensitive information via exfiltration</td>
                                    <td style={{ border: "2px solid white", padding: "8px", backgroundColor: "#333" }}>3</td>
                                    <td style={{ border: "2px solid white", padding: "8px", backgroundColor: "#333" }}>3</td>
                                    <td style={{ border: "2px solid white", padding: "8px", backgroundColor: "red", color: "black" }}>8</td>
                                </tr>
                                <tr>
                                    <td style={{ border: "2px solid white", padding: "8px", backgroundColor: "#333", color: "white" }}>Employee</td>
                                    <td style={{ border: "2px solid white", padding: "8px", backgroundColor: "#333" }}>Disrupt mission-critical operations</td>
                                    <td style={{ border: "2px solid white", padding: "8px", backgroundColor: "#333" }}>2</td>
                                    <td style={{ border: "2px solid white", padding: "8px", backgroundColor: "#333" }}>3</td>
                                    <td style={{ border: "2px solid white", padding: "8px", backgroundColor: "orange", color: "black" }}>6</td>
                                </tr>
                                <tr>
                                    <td style={{ border: "2px solid white", padding: "8px", backgroundColor: "#333", color: "white" }}>User</td>
                                    <td style={{ border: "2px solid white", padding: "8px", backgroundColor: "#333" }}>Delete or modify critical information</td>
                                    <td style={{ border: "2px solid white", padding: "8px", backgroundColor: "#333" }}>1</td>
                                    <td style={{ border: "2px solid white", padding: "8px", backgroundColor: "#333" }}>3</td>
                                    <td style={{ border: "2px solid white", padding: "8px", backgroundColor: "green", color: "black" }}>3</td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )
            },
            {
                name: "Approach",
                content: (
                    <>
                        <p>
                            The assessment considered potential threats, business impact, and operational needs.
                            Risks were categorized based on <strong>likelihood</strong> and <strong>impact</strong>.
                        </p>
                    </>
                )
            },
            {
                name: "Remediation Strategy",
                content: (
                    <>
                        <p>
                            To mitigate risk, the company must implement stronger access control mechanisms:
                        </p>
                        <ul>
                            <li>Using <strong>strong passwords</strong> and enforcing <strong>multi-factor authentication (MFA)</strong></li>
                            <li>Applying <strong>role-based access control (RBAC)</strong> to limit user privileges</li>
                            <li>Encrypting data-in-transit with <strong>TLS instead of SSL</strong></li>
                            <li>Using <strong>IP allow-listing</strong> to restrict database access to authorized users</li>
                        </ul>
                    </>
                )
            }
        ]
    },


    //3project
    {
        id: 3,
        title: "SQL Labs",
        sections: [
            {
                name: "Check File and Directory Details",
                content: (
                    <>
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Retrieve 'device_id' and 'operating_system' 
                                columns from the 'machines' table.
                            </p>
                            <p style={{ color: "limegreen" }}>SELECT device_id, operating_system </p>
                            <p style={{ color: "limegreen" }}> FROM machines;</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Obtain a list of all machines with the 'OS 2' 
                                because these machines need an update.
                            </p>
                            <p style={{ color: "limegreen" }}>SELECT device_id, operating_system FROM machines </p>
                            <p style={{ color: "limegreen" }}> WHERE operating_system = 'OS 2';</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Retrieve a list of all employees in the Finance 
                                department to obtain their office numbers.
                            </p>
                            <p style={{ color: "limegreen" }}>SELECT * FROM employees</p>
                            <p style={{ color: "limegreen" }}> WHERE department = 'Finance';</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Identify employee machines: A machine in 'South-109' 
                                has an issue. Determine which employee uses that computer.
                            </p>
                            <p style={{ color: "limegreen" }}>SELECT * FROM employees </p>
                            <p style={{ color: "limegreen" }}> WHERE office = 'South-109';</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Retrieve all employees in the 'South' building.
                            </p>
                            <p style={{ color: "limegreen" }}>SELECT * FROM employees</p>
                            <p style={{ color: "limegreen" }}> WHERE office LIKE 'South%';</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Retrieve login attempts after a certain date.
                            </p>
                            <p style={{ color: "limegreen" }}>SELECT * FROM log_in_attempts</p>
                            <p style={{ color: "limegreen" }}> WHERE login_date ≻ '2022-05-09';</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Retrieve logins in a date range.
                            </p>
                            <p style={{ color: "limegreen" }}>SELECT * FROM log_in_attempts</p>
                            <p style={{ color: "limegreen" }}> WHERE login_date BETWEEN '2022-05-09' AND '2022-05-11';</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Retrieve logins before 07:00:00.
                            </p>
                            <p style={{ color: "limegreen" }}>SELECT * FROM log_in_attempts</p>
                            <p style={{ color: "limegreen" }}> WHERE login_time ≺ '07:00:00';</p>
                        </div>

                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Retrieve logins between '06:00:00' and '07:00:00'.
                            </p>
                            <p style={{ color: "limegreen" }}>SELECT * FROM log_in_attempts</p>
                            <p style={{ color: "limegreen" }}> WHERE login_time BETWEEN '06:00:00' AND '07:00:00';</p>
                        </div>

                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Retrieve only 'event_id', 'username' and 'login_date' fields.
                            </p>
                            <p style={{ color: "limegreen" }}>SELECT event_id, username, login_date</p>
                            <p style={{ color: "limegreen" }}> FROM log_in_attempts WHERE event_id ≻= 100;</p>
                        </div>

                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Retrieve logins with 'event_id' between 100 and 150.
                            </p>
                            <p style={{ color: "limegreen" }}>SELECT event_id, username, login_date</p>
                            <p style={{ color: "limegreen" }}> FROM log_in_attempts WHERE event_id BETWEEN 100 AND 150;</p>
                        </div>

                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Retrieve failed login attempts after business hours.
                            </p>
                            <p style={{ color: "limegreen" }}>SELECT * FROM log_in_attempts</p>
                            <p style={{ color: "limegreen" }}> WHERE login_time ≻ '18:00:00' AND success = 0;</p>
                        </div>

                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Retrieve logins on '2022-05-09' and the day before.
                            </p>
                            <p style={{ color: "limegreen" }}>SELECT * FROM log_in_attempts</p>
                            <p style={{ color: "limegreen" }}> WHERE login_date = '2022-05-09' OR login_date = '2022-05-08';</p>
                        </div>

                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Retrieve logins outside of Mexico.
                            </p>
                            <p style={{ color: "limegreen" }}>SELECT * FROM log_in_attempts</p>
                            <p style={{ color: "limegreen" }}> WHERE NOT country LIKE 'Mex%';</p>
                        </div>
                    </>
                )
            }
        ]
    },


    //4project
    {
        id: 4,
        title: "Linux Command Reference",
        sections: [
            {
                name: "Check File and Directory Details",
                content: (
                    <>
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Explore the permission of the project's directory 
                                and the file it contains, including hidden files
                            </p>
                            <p style={{ color: "limegreen" }}>ls -la</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Change file permission to the 'project_k.txt' file.
                                Removing write permission to 'other'.
                            </p>
                            <p style={{ color: "limegreen" }}>chmod o-w project_k.txt</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Remove the write permission for the user and for 
                                the group and grant permission to read for the group.
                            </p>
                            <p style={{ color: "limegreen" }}>chmod u-w,g-w,g+r .project_k.txt</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Navigate to the project directory and 
                                list the content and permission
                            </p>
                            <p style={{ color: "limegreen" }}>cd projects</p>
                            <p style={{ color: "limegreen" }}>/projects ls -l</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Change the permission of the identified file so 
                                that the owner type of other does not have write permission
                            </p>
                            <p style={{ color: "limegreen" }}>chmod o-w project_k.txt</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Change permissions of the project_m.txt 
                                file so that the group doesn’t have read or write permissions.
                            </p>
                            <p style={{ color: "limegreen" }}>chmod g-r project_m.txt</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # The file '.project_x.txt' is a hidden file that has 
                                been archived and should not be written to by anyone.
                                # (The user and group should still be able to read this file.)
                            </p>
                            <p style={{ color: "limegreen" }}>chmod u-w,g-w,g+r .project_x.txt</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Only the researcher2 user should be 
                                allowed to access the drafts directory and its contents.
                                # (Only researcher2 should have execute privileges.) 
                                Currently, the group has 'execute' access.
                            </p>
                            <p style={{ color: "limegreen" }}>chmod g-x drafts</p>
                        </div>
                    </>
                )
            },
            {
                name: "Networking",
                content: (
                    <>
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Download a file from url
                            </p>
                            <p style={{ color: "limegreen" }}>curl -0 [file_url]</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # IP address reverse lookup
                            </p>
                            <p style={{ color: "limegreen" }}>dig -x [ip]</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Domain reverse lookup
                            </p>
                            <p style={{ color: "limegreen" }}>dig -x [host]</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Show local IP address
                            </p>
                            <p style={{ color: "limegreen" }}>hostname -l</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Show all network interface
                            </p>
                            <p style={{ color: "limegreen" }}>ifconfig</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Assign IP address to interface
                            </p>
                            <p style={{ color: "limegreen" }}>ip address add [ip]</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Show active listening ports
                            </p>
                            <p style={{ color: "limegreen" }}>netstat -pnltu</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Show domain information
                            </p>
                            <p style={{ color: "limegreen" }}>nslookup [domain]</p>
                        </div>

                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Check network status
                            </p>
                            <p style={{ color: "limegreen" }}>ping [hostname]</p>
                        </div>

                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Upload file from local to remote computer
                            </p>
                            <p style={{ color: "limegreen" }}>put [file]</p>
                        </div>

                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Download a file from url
                            </p>
                            <p style={{ color: "limegreen" }}>wget [file_url]</p>
                        </div>

                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Show domain information
                            </p>
                            <p style={{ color: "limegreen" }}>who is [domain]</p>
                        </div>
                    </>
                )
            },
            {
                name: "User and Groups",
                content: (
                    <>
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Add a new user
                            </p>
                            <p style={{ color: "limegreen" }}>adduser [user]</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Change directory group
                            </p>
                            <p style={{ color: "limegreen" }}>chgrp [group][directory] </p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Add new group
                            </p>
                            <p style={{ color: "limegreen" }}>groupadd [group]</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Show active user details
                            </p>
                            <p style={{ color: "limegreen" }}>id</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Show last system logins
                            </p>
                            <p style={{ color: "limegreen" }}>last</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Change the password for the user
                            </p>
                            <p style={{ color: "limegreen" }}>passwd [username]</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Delete a user
                            </p>
                            <p style={{ color: "limegreen" }}>userdel [user]</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Modify user informaton
                            </p>
                            <p style={{ color: "limegreen" }}>usermod</p>
                        </div>

                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Add user to group
                            </p>
                            <p style={{ color: "limegreen" }}>usermod -agG [group] [user] </p>
                        </div>

                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Show logged users and activities
                            </p>
                            <p style={{ color: "limegreen" }}>w</p>
                        </div>

                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Show who is logged in
                            </p>
                            <p style={{ color: "limegreen" }}>who</p>
                        </div>
                    </>
                )
            },
            {
                name: "File Commands",
                content: (
                    <>
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Print lines matching a pattern 
                            </p>
                            <p style={{ color: "limegreen" }}>awk '[pattern] ﹛print $0﹜' [file]</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Decrypt a file
                            </p>
                            <p style={{ color: "limegreen" }}>gpg [file.gpg] </p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Encrypt a file
                            </p>
                            <p style={{ color: "limegreen" }}>gpg -c [file]</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Present text and allows scrolling beyond
                            </p>
                            <p style={{ color: "limegreen" }}>less</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Create symbolinc link to file
                            </p>
                            <p style={{ color: "limegreen" }}>ln -s [/path/file] [link]</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # words/lines/bytes in directory
                            </p>
                            <p style={{ color: "limegreen" }}>ls ∣ xargs wc </p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Overwrite and delete a file 
                            </p>
                            <p style={{ color: "limegreen" }}>shred -u [file]</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Store command output to a file, skip terminal output
                            </p>
                            <p style={{ color: "limegreen" }}>[command] ∣ tee [file] ≻/dev/null </p>
                        </div>

                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Cut data section and print
                            </p>
                            <p style={{ color: "limegreen" }}>[data]  ∣ cut -d[delimiter] </p>
                        </div>
                    </>
                )
            },
            {
                name: "Hardware Information",
                content: (
                    <>
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Unreadable blocks test
                            </p>
                            <p style={{ color: "limegreen" }}>badblocks -s /dev/[disk]</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Show CPU information
                            </p>
                            <p style={{ color: "limegreen" }}>cat /proc/cpuinfo </p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Show bootup messages
                            </p>
                            <p style={{ color: "limegreen" }}>dmesg</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Show BIOS hardware info
                            </p>
                            <p style={{ color: "limegreen" }}>dmidecode</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Show free and used memory
                            </p>
                            <p style={{ color: "limegreen" }}>free -h</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Show disk data info
                            </p>
                            <p style={{ color: "limegreen" }}>hdparm -i /dev/[disk] </p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Disk read speed test
                            </p>
                            <p style={{ color: "limegreen" }}>hdparm -tT /dev/[disk]</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Block device info
                            </p>
                            <p style={{ color: "limegreen" }}>lsblk</p>
                        </div>

                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Hardware configuration info
                            </p>
                            <p style={{ color: "limegreen" }}>lshw </p>
                        </div>

                        
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Tree-diagram of PCI devices
                            </p>
                            <p style={{ color: "limegreen" }}>lspci -tv </p>
                        </div>

                        
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Tree-diagram of USB devices
                            </p>
                            <p style={{ color: "limegreen" }}>lsusb -tv </p>
                        </div>

                        
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Display OS & Hardware info
                            </p>
                            <p style={{ color: "limegreen" }}>neofetch </p>
                        </div>
                    </>
                )
            },
            {
                name: "System Management",
                content: (
                    <>
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Show current user information
                            </p>
                            <p style={{ color: "limegreen" }}>finger [username]</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Show reboot histoy
                            </p>
                            <p style={{ color: "limegreen" }}>last reboot </p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Add a new kernel module
                            </p>
                            <p style={{ color: "limegreen" }}>modprobe [module-name]</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Schedule a system shut down
                            </p>
                            <p style={{ color: "limegreen" }}>shutdown [hh:mm]</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # View or limit system resources
                            </p>
                            <p style={{ color: "limegreen" }}>ulimit [flags][limit]</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Show kernel release info
                            </p>
                            <p style={{ color: "limegreen" }}>uname -a </p>
                        </div>
                    </>
                )
            },
            {
                name: "File permission",
                content: (
                    <>
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Full permission to owner, read permission for others
                            </p>
                            <p style={{ color: "limegreen" }}>chmod 755 [file]</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Full permission to owner, read and write permission for others
                            </p>
                            <p style={{ color: "limegreen" }}>chmod 766 [file] </p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # File read, write execute permission to everyone
                            </p>
                            <p style={{ color: "limegreen" }}>chmod 777 [file]</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Change file ownership
                            </p>
                            <p style={{ color: "limegreen" }}>chown [user][file]</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Change file owner and group
                            </p>
                            <p style={{ color: "limegreen" }}>chown [user]:[group] [file]</p>
                        </div>
                    </>
                )
            },
            {
                name: "SSH Login",
                content: (
                    <>
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Connect to host as user
                            </p>
                            <p style={{ color: "limegreen" }}>ssh [user]@[host]</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Connect to host via port 22
                            </p>
                            <p style={{ color: "limegreen" }}>ssh [hpst] </p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Use a non default port
                            </p>
                            <p style={{ color: "limegreen" }}>ssh -p [port] [user]@[host]</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Connect to Telnet via port 23
                            </p>
                            <p style={{ color: "limegreen" }}>telnet [host]</p>
                        </div>
                    </>
                )
            },
            {
                name: "Shell Command",
                content: (
                    <>
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Create a command alias
                            </p>
                            <p style={{ color: "limegreen" }}>alias [alias] ='[command]'</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Schedule a job
                            </p>
                            <p style={{ color: "limegreen" }}>at [hh:mm] </p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Print command history
                            </p>
                            <p style={{ color: "limegreen" }}>history</p>
                        </div>
    
                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Display current jobs and status
                            </p>
                            <p style={{ color: "limegreen" }}>jobs</p>
                        </div>

                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Display command manual
                            </p>
                            <p style={{ color: "limegreen" }}>man [command]</p>
                        </div>

                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Postpone command execution
                            </p>
                            <p style={{ color: "limegreen" }}>sleep [interval] && [command]</p>
                        </div>

                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Remove an alias
                            </p>
                            <p style={{ color: "limegreen" }}>unalias</p>
                        </div>

                        <div style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "15px",
                            borderRadius: "5px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            marginTop: "10px"
                        }}>
                            <p style={{ color: "white", fontStyle: "italic" }}>
                                # Set interval to run a command
                            </p>
                            <p style={{ color: "limegreen" }}>watch -n [interval] [command]</p>
                        </div>
                    </>
                )
            },
        ]
    },


    //5project
    {
        id: 5,
        title: "Risk Assessment",
        sections: [
            {
                name: "Scenario",
                content: (
                    <>
                        <p>
                            You've joined a new cybersecurity team at a commercial bank.
                            The team is conducting a risk assessment of the bank's current operational environment.
                        </p>
                        <p>
                            As part of the assessment, they are creating a <strong>risk register</strong> to help focus on securing
                            the most vulnerable risks.
                        </p>
                    </>
                )
            },
            {
                name: "Risk Assessment Table",
                content: (
                    <>
                        <p style={{ marginBottom: "10px", fontSize: "16px" }}>
                            This table assesses various risks related to the asset category <strong>"Funds"</strong> and prioritizes them
                            based on likelihood and severity.
                        </p>
            
                        <table style={{ 
                            width: "80%", 
                            maxWidth: "100%", 
                            borderCollapse: "collapse", 
                            margin: "0 auto", 
                            textAlign: "center", 
                            border: "2px solid white" }}>

                            <thead>
                                <tr style={{ backgroundColor: "rgba(24, 38, 82, 1)", color: "white" }}>
                                    <th style={{ padding: "10px", border: "1px solid white" }}>Asset</th>
                                    <th style={{ padding: "10px", border: "1px solid white" }}>Risk(s)</th>
                                    <th style={{ padding: "10px", border: "1px solid white" }}>Description</th>
                                    <th style={{ padding: "10px", border: "1px solid white" }}>Likelihood</th>
                                    <th style={{ padding: "10px", border: "1px solid white" }}>Severity</th>
                                    <th style={{ padding: "10px", border: "1px solid white" }}>Risk</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ backgroundColor: "rgba(40, 40, 40, 1)", color: "white" }}>
                                    <td style={{ padding: "10px", border: "1px solid white" }}>Funds</td>
                                    <td style={{ padding: "10px", border: "1px solid white" }}>Business email compromise</td>
                                    <td style={{ padding: "10px", border: "1px solid white" }}>An employee is tricked into sharing confidential information.</td>
                                    <td style={{ padding: "10px", border: "1px solid white" }}>2</td>
                                    <td style={{ padding: "10px", border: "1px solid white" }}>2</td>
                                    <td style={{ padding: "10px", border: "1px solid white", backgroundColor: "rgba(239, 45, 45, 1)", color: "white" }}>8</td>
                                </tr>
                                <tr style={{ backgroundColor: "rgba(40, 40, 40, 1)", color: "white" }}>
                                    <td style={{ padding: "10px", border: "1px solid white" }}>Funds</td>
                                    <td style={{ padding: "10px", border: "1px solid white" }}>Compromised user database</td>
                                    <td style={{ padding: "10px", border: "1px solid white" }}>Customer data is poorly encrypted.</td>
                                    <td style={{ padding: "10px", border: "1px solid white" }}>2</td>
                                    <td style={{ padding: "10px", border: "1px solid white" }}>3</td>
                                    <td style={{ padding: "10px", border: "1px solid white", backgroundColor: "rgba(247, 136, 24, 1)", color: "white" }}>6</td>
                                </tr>
                                <tr style={{ backgroundColor: "rgba(40, 40, 40, 1)", color: "white" }}>
                                    <td style={{ padding: "10px", border: "1px solid white" }}>Funds</td>
                                    <td style={{ padding: "10px", border: "1px solid white" }}>Financial records leak</td>
                                    <td style={{ padding: "10px", border: "1px solid white" }}>A database server of backed-up data is publicly accessible.</td>
                                    <td style={{ padding: "10px", border: "1px solid white" }}>1</td>
                                    <td style={{ padding: "10px", border: "1px solid white" }}>3</td>
                                    <td style={{ padding: "10px", border: "1px solid white", backgroundColor: "rgba(39, 251, 28, 1)", color: "black" }}>3</td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )
            },
            
            {
                name: "Sample Risk Matrix",
                content: (
                    <>
                        <table style={{ 
                            width: "80%", 
                            maxWidth: "100%", 
                            borderCollapse: "collapse", 
                            margin: "0 auto", 
                            textAlign: "center", 
                            border: "2px solid white" }}>

                            <thead>
                                <tr>
                                    <th rowSpan="2" style={{ border: "2px solid white" }}></th>
                                    <th colSpan="3" style={{ backgroundColor: "#333", color: "white", border: "2px solid white" }}>Severity</th>
                                </tr>
                                <tr>
                                    <th style={{ backgroundColor: "rgba(39, 251, 28, 1)", color: "black", border: "2px solid white" }}>Low (1)</th>
                                    <th style={{ backgroundColor: "rgba(247, 136, 24, 1)", color: "black", border: "2px solid white" }}>Moderate (2)</th>
                                    <th style={{ backgroundColor: "rgba(239, 45, 45, 1)", color: "black", border: "2px solid white" }}>High (3)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th rowSpan="3" style={{ backgroundColor: "#333", color: "white", border: "2px solid white" }}>Likelihood</th>
                                    <td style={{ backgroundColor: "#333", color: "white", border: "2px solid white" }}>3</td>
                                    <td style={{ backgroundColor: "#333", color: "white", border: "2px solid white" }}>6</td>
                                    <td style={{ backgroundColor: "rgba(239, 45, 45, 1)", color: "black", border: "2px solid white" }}>9</td>
                                </tr>
                                <tr>
                                    <td style={{ backgroundColor: "#333", color: "white", border: "2px solid white" }}>2</td>
                                    <td style={{ backgroundColor: "#333", color: "white", border: "2px solid white" }}>4</td>
                                    <td style={{ backgroundColor: "rgba(247, 136, 24, 1)", color: "black", border: "2px solid white" }}>6</td>
                                </tr>
                                <tr>
                                    <td style={{ backgroundColor: "#333", color: "white", border: "2px solid white" }}>1</td>
                                    <td style={{ backgroundColor: "#333", color: "white", border: "2px solid white" }}>2</td>
                                    <td style={{ backgroundColor: "rgba(39, 251, 28, 1)", color: "black", border: "2px solid white" }}>3</td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )
            }
        ]
    },


    //6project
    {
        id: 6,
        title: "Phishing Email Investigation",
        sections: [
            {
                name: "Scenario",
                content: (
                    <>
                        <p>
                            You are a Level-One Security Operations Center (SOC) analyst at a financial services company.
                        </p>
                        <p>
                            A phishing alert has been raised regarding a suspicious email attachment. The email contained a 
                            password-protected file and was sent from an untrusted source with inconsistencies in the sender's 
                            identity.
                        </p>
                        <p>
                            Your task is to investigate the alert, analyze the email's content, and determine whether the 
                            attachment is malicious.
                        </p>
                    </>
                )
            },
            {
                name: "Additional Information",
                content: (
                    <>
                        <h3>Phishing Playbook</h3>
                        <a href="documents/phishing_playbook.docx" target="_blank">
                            <button style={{
                                padding: "10px 20px",
                                backgroundColor: "rgba(24, 38, 82, 1)",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}>
                                Open Phishing Playbook
                            </button>
                        </a>
            
                        <h4>Known Malicious File Hash</h4>
                        <p>54e6ea47eb04634d3e87fd7787e2136ccfbcc80ade34f246a12cf93bab527f6b</p>
            
                        <div style={{
                            backgroundColor: "#f9f9f9",
                            color: "#333",
                            padding: "20px",
                            borderRadius: "8px",
                            fontFamily: "monospace",
                            fontSize: "14px",
                            whiteSpace: "pre-wrap",  
                            wordWrap: "break-word",    
                            maxWidth: "100%",
                            overflowX: "auto",
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"
                        }}>
                            <p>From: <strong>Def Communications</strong> &lt;76tguyhh6tgftrt7tg.su&gt; </p>
                            <p>(IP: 114.114.114.114)</p>

                            <p>Sent: <strong>Wednesday, July 20, 2022 09:30:14 AM</strong></p>
                        
                            <p>To: <strong>hr@inergy.com</strong> (IP:176.157.125.93)</p>
                            
                            <p>Subject: <strong>Re: Infrastructure Engineer Role</strong></p>

                            <p>
                                
                            Dear HR at Inergy, 
                            </p>
                             
                            <p>
                            I am writing to express my interest in the engineer role posted from the website.
                            
                            There is an attached resume and cover letter. For privacy, the file is password-protected.  </p>
                            <p>Use the password: <strong>paradise10789</strong> to open.</p>
                            
                            
                            <p>
                            Thank you, 
                            </p> 
                            <p><strong>Clyde West</strong> </p> 
                            <p>Attachment: filename="bfsvc.exe"</p>

                            
             
            
            
             
                        </div>
                    </>
                )
            },
            {
                name: "Alert Ticket",
                content: (
                    <>
                        <table style={{ 
                            width: "80%", 
                            maxWidth: "100%", 
                            borderCollapse: "collapse", 
                            margin: "0 auto", 
                            textAlign: "center", 
                            border: "2px solid white" }}>

                            <thead>
                                <tr style={{ backgroundColor: "rgba(24, 38, 82, 1)", color: "white" }}>
                                    <th style={{ padding: "10px", border: "1px solid white" }}>Ticket ID</th>
                                    <th style={{ padding: "10px", border: "1px solid white" }}>Alert Message</th>
                                    <th style={{ padding: "10px", border: "1px solid white" }}>Severity</th>
                                    <th style={{ padding: "10px", border: "1px solid white" }}>Details</th>
                                    <th style={{ padding: "10px", border: "1px solid white" }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ backgroundColor: "rgba(40, 40, 40, 1)", color: "white" }}>
                                    <td style={{ padding: "10px", border: "1px solid white" }}>A-2703</td>
                                    <td style={{ padding: "10px", border: "1px solid white" }}>SERVER-MAIL Phishing attempt, possible malware download</td>
                                    <td style={{ padding: "10px", border: "1px solid white" }}>Medium</td>
                                    <td style={{ padding: "10px", border: "1px solid white" }}>User may have opened a malicious email and clicked suspicious links.</td>
                                    <td style={{ padding: "10px", border: "1px solid white" }}>Escalated</td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )
            },
            {
                name: "Investigation Findings",
                content: (
                    <>
                        <p>
                            The security alert detected that an employee downloaded and opened a malicious file from a phishing email.
                            The sender's email address does not match the sender's name, and the email contains grammatical errors.
                        </p>
                        <p>
                            The attachment "bfsvc.exe" was downloaded, and its hash has been identified as a <strong>known malicious file</strong>.
                            This ticket was escalated to a Level-Two SOC analyst for further investigation.
                        </p>
                    </>
                )
            }
        ]
    },

    //7project:
    {
        id: 7,
        title: "Data Leak Incident Report",
        sections: [
            {
                name: "Incident Summary",
                content: (
                    <>
                        <p>
                            A sales manager shared access to a folder of internal-only documents with their team during a meeting.
                            The folder contained files related to a new product that has not been publicly announced, 
                            including customer analytics and promotional materials.
                        </p>
                        <p>
                            After the meeting, the manager did not revoke access, and an employee accidentally shared the link with 
                            an external business partner, who later posted it publicly on their company’s social media.
                        </p>
                    </>
                )
            },
            {
                name: "Security Plan Snapshot",
                content: (
                    <>
                        <p>
                            The <strong>NIST Cybersecurity Framework (CSF)</strong> follows a hierarchical structure that helps businesses 
                            improve security by defining broad security functions and drilling down into specific security controls.
                        </p>

                        <table style={{ 
                            width: "80%", 
                            maxWidth: "100%", 
                            borderCollapse: "collapse", 
                            margin: "0 auto", 
                            textAlign: "center", 
                            border: "2px solid white" }}>

                        <thead>
                            <tr style={{ backgroundColor: "rgba(24, 38, 82, 1)", color: "white", borderBottom: "2px solid white" }}>
                                <th style={{ padding: "10px", border: "1px solid white" }}>Function</th>
                                <th style={{ padding: "10px", border: "1px solid white" }}>Category</th>
                                <th style={{ padding: "10px", border: "1px solid white" }}>Subcategory</th>
                                <th style={{ padding: "10px", border: "1px solid white" }}>Reference(s)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ backgroundColor: "#333", color: "white" }}>
                                <td style={{ fontWeight: "bold", backgroundColor: "rgba(24, 38, 82, 1)", color: "white", padding: "10px", border: "1px solid white" }}>Protect</td>
                                <td style={{ padding: "10px", border: "1px solid white" }}>PR.DS: Data Security</td>
                                <td style={{ padding: "10px", border: "1px solid white" }}>PR.DS-5: Protections against data leaks</td>
                                <td style={{ padding: "10px", border: "1px solid white" }}>NIST SP 800-53: AC-6</td>
                            </tr>
                        </tbody>
                    </table>
                    </>
                )
            },
            {
                name: "NIST SP 800-53: AC-6 - Least Privilege",
                content: (
                    <>
                        <p>
                            The <strong>NIST SP 800-53</strong> document provides detailed security controls, including 
                            <em>Least Privilege</em> as a critical measure for preventing unauthorized data access.
                        </p>
                        <table style={{ 
                            width: "80%", 
                            maxWidth: "100%", 
                            borderCollapse: "collapse", 
                            margin: "0 auto", 
                            textAlign: "center", 
                            border: "2px solid white" }}>
                        <tbody>
                            <tr style={{ backgroundColor: "rgba(24, 38, 82, 1)", color: "white", fontWeight: "bold", borderBottom: "2px solid white" }}>
                                <td style={{ padding: "10px", border: "1px solid white" }}>AC-6</td>
                                <td style={{ padding: "10px", border: "1px solid white" }}>Least Privilege</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: "bold", backgroundColor: "rgba(24, 38, 82, 1)", color: "white", padding: "10px", border: "1px solid white" }}>Control:</td>
                                <td style={{ padding: "10px", border: "1px solid white" }}>
                                    Only provide the minimal access necessary to complete tasks. Enforce role-based access controls 
                                    and restrict sensitive data access.
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: "bold", backgroundColor: "rgba(24, 38, 82, 1)", color: "white", padding: "10px", border: "1px solid white" }}>Discussion:</td>
                                <td style={{ padding: "10px", border: "1px solid white" }}>
                                    Processes and users should not have higher privileges than needed. Least privilege prevents 
                                    unauthorized data modifications or leaks.
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: "bold", backgroundColor: "rgba(24, 38, 82, 1)", color: "white", padding: "10px", border: "1px solid white" }}>Control Enhancements:</td>
                                <td style={{ padding: "10px", border: "1px solid white" }}>
                                    <ul style={{ margin: "0", paddingLeft: "20px" }}>
                                        <li>Implement role-based access restrictions.</li>
                                        <li>Enforce session timeouts and access revocation.</li>
                                        <li>Monitor and log access activities.</li>
                                        <li>Audit user privileges regularly.</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    </>
                )
            }
        ]
    },


    //8project:
    {
        id: 8,
        title: "Botium Toys: Security Audit Report",
        sections: [
            {
                name: "Scope, Goals, and Risk Assessment",
                content: (
                    <>
                        <h3>Scope</h3>
                        <p>
                            The scope of this audit includes the entire security program at Botium Toys. 
                            This covers employee devices, internal networks, data storage, 
                            and overall IT infrastructure. The goal is to assess the security posture 
                            and ensure compliance with best practices.
                        </p>

                        <h3>Goals</h3>
                        <ul>
                            <li>Identify all company assets and IT infrastructure.</li>
                            <li>Evaluate compliance with U.S. and international security regulations.</li>
                            <li>Determine risk exposure and recommend security enhancements.</li>
                        </ul>
                    </>
                )
            },
            {
                name: "Current IT Assets",
                content: (
                    <>
                        <h3>List of IT Assets</h3>
                        <ul>
                            <li>On-premises employee workstations and networking devices.</li>
                            <li>End-user devices such as laptops, smartphones, and remote workstations.</li>
                            <li>Company storefront products and inventory management systems.</li>
                            <li>Business-critical applications including accounting, databases, security monitoring, and telecommunication software.</li>
                            <li>Internet access and data storage solutions.</li>
                            <li>Legacy systems requiring human monitoring and maintenance.</li>
                        </ul>
                    </>
                )
            },
            {
                name: "Risk Assessment",
                content: (
                    <>
                        <h3>Identified Risks</h3>
                        <p>
                            Currently, asset management is inadequate, and Botium Toys does not fully comply with 
                            industry standards. Security controls such as encryption, access control, and incident 
                            response need urgent improvements.
                        </p>

                        <h3>Risk Score</h3>
                        <p>
                            <strong>Overall Risk Score: 8/10</strong> (High). The lack of security controls, encryption, 
                            and adherence to compliance poses significant risk to business continuity and data security.
                        </p>

                        <h3>Key Findings</h3>
                        <ul>
                            <li>All employees have unrestricted access to sensitive customer data.</li>
                            <li>Encryption is not enforced for credit card information stored in the database.</li>
                            <li>No enforcement of the principle of least privilege or separation of duties.</li>
                            <li>Firewalls and antivirus protection exist, but there is no intrusion detection system (IDS).</li>
                            <li>No backup and disaster recovery plan in place.</li>
                            <li>Password policy does not meet minimum complexity standards.</li>
                            <li>No centralized password management system for enforcing security policies.</li>
                        </ul>
                    </>
                )
            },
            {
                name: "Security Recommendations",
                content: (
                    <>
                        <h3>Recommended Security Controls</h3>
                        <ul>
                            <li>Implement <strong>role-based access control (RBAC)</strong> to limit employee access.</li>
                            <li>Encrypt sensitive data using <strong>AES-256 encryption</strong> and enforce secure data transmission.</li>
                            <li>Deploy an <strong>intrusion detection system (IDS)</strong> to monitor network traffic.</li>
                            <li>Establish <strong>automated backup and disaster recovery solutions</strong>.</li>
                            <li>Upgrade the password policy to require at least <strong>12-character alphanumeric passwords</strong> with MFA.</li>
                            <li>Introduce <strong>centrally managed authentication and password vaults</strong>.</li>
                        </ul>
                    </>
                )
            }
        ]
    },

    //9project:
    {
        id: 9,
        title: "Encryption & Hashing Techniques",
        sections: [
            {
                name: "Decrypt an Encrypted Message",
                content: (
                    <>
                    <div style={{ backgroundColor: "black", padding: "15px", borderRadius: "5px", color: "white", fontFamily: "monospace" }}>
                            <p><em>All files in your home directory have been encrypted.</em></p>
                            <p><em>You need to break the <strong>Caesar cipher</strong> and decrypt the files using Linux commands.</em></p>
                    </div>

                    <div style={{
                        backgroundColor: "black",
                        color: "white",
                        padding: "15px",
                        borderRadius: "5px",
                        fontFamily: "monospace",
                        fontSize: "16px",
                        whiteSpace: "pre-wrap",
                        wordWrap: "break-word"
                    }}>
                        <p style={{ color: "white", fontStyle: "italic" }}>
                        # Step 1: Read Directory Contents
                        </p>
                        <p style={{ color: "limegreen" }}>pwd</p>
                        <p style={{ color: "limegreen" }}>ls -la</p>
                    </div>

                    <div style={{
                        backgroundColor: "black",
                        color: "white",
                        padding: "15px",
                        borderRadius: "5px",
                        fontFamily: "monospace",
                        fontSize: "16px",
                        whiteSpace: "pre-wrap",
                        wordWrap: "break-word"
                    }}>
                        <p style={{ color: "white", fontStyle: "italic" }}>
                        # Step 2: Read Encrypted Message
                        </p>
                        <p style={{ color: "limegreen" }}>cat README.txt</p>
                    </div>

                    <div style={{
                        backgroundColor: "black",
                        color: "white",
                        padding: "15px",
                        borderRadius: "5px",
                        fontFamily: "monospace",
                        fontSize: "16px",
                        whiteSpace: "pre-wrap",
                        wordWrap: "break-word"
                    }}>
                        <p style={{ color: "white", fontStyle: "italic" }}>
                        # Step 3: Locate Hidden File
                        </p>
                        <p style={{ color: "limegreen" }}>cd caesar</p>
                        <p style={{ color: "limegreen" }}>ls -a</p>
                    </div>

                    <div style={{
                        backgroundColor: "black",
                        color: "white",
                        padding: "15px",
                        borderRadius: "5px",
                        fontFamily: "monospace",
                        fontSize: "16px",
                        whiteSpace: "pre-wrap",
                        wordWrap: "break-word"
                    }}>
                        <p style={{ color: "white", fontStyle: "italic" }}>
                        # Step 4: Decrypt Using the Caesar Cipher
                        </p>
                        <p style={{ color: "limegreen" }}>cat .leftShift3 | tr "d-za-cD-ZA-C" "a-zA-Z"</p>
                    </div>

                    <div style={{
                        backgroundColor: "black",
                        color: "white",
                        padding: "15px",
                        borderRadius: "5px",
                        fontFamily: "monospace",
                        fontSize: "16px",
                        whiteSpace: "pre-wrap",
                        wordWrap: "break-word"
                    }}>
                        <p style={{ color: "white", fontStyle: "italic" }}>
                        # Step 5: Use OpenSSL to Recover File
                        </p>
                        <p style={{ color: "limegreen" }}>openssl aes-256-cbc -pbkdf2 -a -d -in Q1.encrypted</p>
                        <p style={{ color: "limegreen" }}>-out Q1.recovered -k ettubrute</p>

                        <p style={{ color: "limegreen" }}>cat Q1.recovered</p>
                    </div>


                    </>

                )
            },
            {
                name: "Create and Compare Hash Values",
                content: (
                    <>
                        <div style={{ backgroundColor: "black", padding: "15px", borderRadius: "5px", color: "white", fontFamily: "monospace" }}>
                            <p><em>In this exercise, you will generate <strong>SHA-256 hash values</strong> for different files and compare them to detect modifications.</em></p>
                        </div>

                        <div style={{
                        backgroundColor: "black",
                        color: "white",
                        padding: "15px",
                        borderRadius: "5px",
                        fontFamily: "monospace",
                        fontSize: "16px",
                        whiteSpace: "pre-wrap",
                        wordWrap: "break-word"
                    }}>
                        <p style={{ color: "white", fontStyle: "italic" }}>
                        # Step 1: List Directory Contents
                        </p>
                        <p style={{ color: "limegreen" }}>ls</p>
                    </div>

                    <div style={{
                        backgroundColor: "black",
                        color: "white",
                        padding: "15px",
                        borderRadius: "5px",
                        fontFamily: "monospace",
                        fontSize: "16px",
                        whiteSpace: "pre-wrap",
                        wordWrap: "break-word"
                    }}>
                        <p style={{ color: "white", fontStyle: "italic" }}>
                        # Step 2: View File Contents
                        </p>
                        <p style={{ color: "limegreen" }}>cat file1.txt</p>
                        <p style={{ color: "limegreen" }}>cat file2.txt</p>
                    </div>

                    <div style={{
                        backgroundColor: "black",
                        color: "white",
                        padding: "15px",
                        borderRadius: "5px",
                        fontFamily: "monospace",
                        fontSize: "16px",
                        whiteSpace: "pre-wrap",
                        wordWrap: "break-word"
                    }}>
                        <p style={{ color: "white", fontStyle: "italic" }}>
                        # Step 3: Generate Hashes for Files
                        </p>
                        <p style={{ color: "limegreen" }}>sha256sum file1.txt</p>
                        <p style={{ color: "limegreen" }}>sha256sum file2.txt</p>
                    </div>

                    <div style={{
                        backgroundColor: "black",
                        color: "white",
                        padding: "15px",
                        borderRadius: "5px",
                        fontFamily: "monospace",
                        fontSize: "16px",
                        whiteSpace: "pre-wrap",
                        wordWrap: "break-word"
                    }}>
                        <p style={{ color: "white", fontStyle: "italic" }}>
                        # Step 4: Store Hash Values in Separate Files
                        </p>
                        <p style={{ color: "limegreen" }}>sha256sum file1.txt &gt;&gt; file1hash</p>
                        <p style={{ color: "limegreen" }}>sha256sum file2.txt &gt;&gt; file2hash</p>
                    </div>

                    <div style={{
                        backgroundColor: "black",
                        color: "white",
                        padding: "15px",
                        borderRadius: "5px",
                        fontFamily: "monospace",
                        fontSize: "16px",
                        whiteSpace: "pre-wrap",
                        wordWrap: "break-word"
                    }}>
                        <p style={{ color: "white", fontStyle: "italic" }}>
                        # Step 5: Compare Hashes for Changes
                        </p>
                        <p style={{ color: "limegreen" }}>openssl aes-256-cbc -pbkdf2 -a -d -in Q1.encrypted</p>
                        <p style={{ color: "limegreen" }}>-out Q1.recovered -k ettubrute</p>

                        <p style={{ color: "limegreen" }}>cmp file1hash file2hash</p>
                    </div>

                            
                    </>
                )
            }
        ]
    }
];

export default cyberSecurityProjects;
