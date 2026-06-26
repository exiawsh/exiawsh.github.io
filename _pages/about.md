---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

**Shihao Wang**  
I am a second-year Ph.D. student in the Department of Computing at The Hong Kong Polytechnic University, advised by Prof. [Lei Zhang](https://www4.comp.polyu.edu.hk/~cslzhang/). My research spans 3D perception and planning for autonomous vehicles and robotics, multimodal foundation models, streaming video understanding, and test-time adaptation for agentic systems, with publications at top conferences including CVPR, ICCV, and AAAI. I also collaborate closely with NVIDIA Research and have contributed to both foundational multimodal models and autonomous driving systems.

My work includes the Eagle‑VLM series, powering NVIDIA’s commercial multimodal models and the Isaac GR00T humanoid robotics platform, as well as OmniDrive and Hydra‑MDP, which connect 3D perception with multimodal reasoning for end‑to‑end autonomous driving and have earned top awards at the CVPR 2024 Autonomous Driving Challenge. I am also the author of StreamPETR (ICCV’23), a streaming paradigm for camera‑based 3D perception that reached #1 among online methods on nuScenes and has been widely adopted in both academia and industry.

Looking ahead, I am developing memory‑centric, self‑evolving AI agents capable of persistent long‑horizon reasoning across virtual and physical domains, aiming to push beyond task‑specific solutions toward truly reliable general‑purpose autonomy.

<span class='anchor' id='news'></span>
# 🔥 News
- *2025.09*: &nbsp;🎉 Two papers have been accepted to NeurIPS 2025.
- *2025.06*: &nbsp;🎉 Contributed to the development and public release of Groot-N1.5.
- *2025.06*: &nbsp;🎉 [Hydra-Next](https://arxiv.org/abs/2503.12030) accepted to ICCV 2025.
- *2025.02*: &nbsp;🎉 [OmniDrive](https://arxiv.org/abs/2405.01533) accepted to CVPR 2025.
- *2024.11*: &nbsp;🎉 [Eagle](https://arxiv.org/abs/2408.15998) accepted to ICLR 2025.
- *2024.06*: &nbsp;🏆 1st Place in End-to-End Driving at Scale, 2nd Place in Driving with Language, CVPR 2024 Autonomous Driving Grand Challenge.
- *2023.11*: &nbsp;🎉 [Far3D](https://arxiv.org/abs/2308.09616) accepted to AAAI 2024.
- *2023.10*: &nbsp;🎉 Joined NVIDIA AV Applied Research Group as Research Intern.
- *2023.02*: &nbsp;🎉 [StreamPETR](https://arxiv.org/abs/2303.11926) accepted to ICCV 2023.
- *2022.10*: &nbsp;🎉 Joined MEGVII Technology Foundation Model Group as Research Intern.


<span class='anchor' id='publications'></span>
# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv </div><img src='images/videoitg.png' alt="VideoITG" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[VideoITG: Multimodal Video Understanding with Instructed Temporal Grounding](https://arxiv.org/abs/2507.13353)

**Shihao Wang**, Guo Chen, De-an Huang, Zhiqi Li, Minghan Li, Guilin Liu, Jose M. Alvarez, Lei Zhang and Zhiding Yu.

arXiv 2025

</div>

</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Blog 2025</div><img src='images/groot.png' alt="Groot" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[GR00T N1.5 An Improved Open Foundation Model for Generalist Humanoid Robots](https://research.nvidia.com/labs/gear/gr00t-n1_5/)

Johan Bjorck, Valts Blukis, Fernando Castañeda, Nikita Cherniadev, Xingye Da, Runyu Ding, Linxi "Jim" Fan, Yu Fang, Dieter Fox, Fengyuan Hu, Spencer Huang, Joel Jang, Xiaowei Jiang, Kaushil Kundalia, Jan Kautz, Zhiqi Li, Kevin Lin, Zongyu Lin, Loic Magne, Yunze Man, Ajay Mandlekar, Avnish Narayan, Soroush Nasiriany, Scott Reed, You Liang Tan, Guanzhi Wang, Jing Wang, Qi Wang, **Shihao Wang**, Jiannan Xiang, Yuqi Xie, Yinzhen Xu, Seonghyeon Ye, Zhiding Yu, Yizhou Zhao, Zhe Zhang, Ruijie Zheng, Yuke Zhu

Blog 2025

</div>

</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCV 2025</div><img src='images/Hydra-Next.png' alt="Hydra-NeXt" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Hydra-NeXt: Robust Closed-Loop Driving with Open-Loop Training](https://arxiv.org/abs/2503.12030)

Zhenxin Li,  **Shihao Wang**, Shiyi Lan, Zhiding Yu, Zuxuan Wu and Jose M. Alvarez.

ICCV 2025

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NIPS 2025</div><img src='images/eagle2_5.png' alt="Eagle2.5" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Eagle 2.5: Boosting Long-Context Post-Training for Frontier Vision-Language Models](https://arxiv.org/abs/2504.15271)

Guo Chen, Zhiqi Li, **Shihao Wang**, Jindong Jiang, Yicheng Liu, Lidong Lu, De-An Huang, Wonmin Byeon, Matthieu Le, Tuomas Rintamaki, Tyler Poon, Max Ehrlich, Tuomas Rintamaki, Tyler Poon, Tong Lu, Limin Wang, Bryan Catanzaro, Jan Kautz, Andrew Tao, Zhiding Yu, Guilin Liu

NIPS 2025

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv</div><img src='images/eagle2.png' alt="Eagle2" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Eagle 2: Building Post-Training Data Strategies from Scratch for Frontier Vision-Language Models](https://arxiv.org/abs/2501.14818)

Zhiqi Li, Guo Chen, Shilong Liu, **Shihao Wang**, Vibashan VS, Yishen Ji, Shiyi Lan, Hao Zhang, Yilin Zhao, Subhashree Radhakrishnan, Nadine Chang, Karan Sapra, Amala Sanjay Deshmukh, Tuomas Rintamaki, Matthieu Le, Ilia Karmanov, Lukas Voegtle, Philipp Fischer, De-An Huang, Timo Roman, Tong Lu, Jose M. Alvarez, Bryan Catanzaro, Jan Kautz, Andrew Tao, Guilin Liu and Zhiding Yu.

arXiv 2025

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2025</div><img src='images/Eagle.jpg' alt="Eagle" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Eagle: Exploring the design space for multimodal llms with mixture of encoders](https://arxiv.org/abs/2408.15998)

Min Shi, Fuxiao Liu, **Shihao Wang**, Shijia Liao, Subhashree Radhakrishnan, Yilin Zhao, De-An Huang, Hongxu Yin, 
Karan Sapra, Yaser Yacoob, Humphrey Shi, Bryan Catanzaro, Andrew Tao, Jan Kautz, Zhiding Yu and Guilin Liu.

ICLR 2025

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2025</div><img src='images/omnidrive.png' alt="OmniDrive" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[OmniDrive: A holistic vision-language dataset for autonomous driving with counterfactual reasoning](https://arxiv.org/abs/2405.01533)

**Shihao Wang**, Zhiding Yu, Xiaohui Jiang, Shiyi Lan, Min Shi, Nadine Chang, Jan Kautz, Ying Li and Jose M. Alvarez.

CVPR 2025

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2024</div><img src='images/Far3D.png' alt="Far3D" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Far3D: Expanding the horizon for surround-view 3d object detection](https://arxiv.org/abs/2308.09616)

Xiaohui Jiang, Shuanglin Li, Yingfei Liu, **Shihao Wang**, Fan Jia, Tiancai Wang, Lijin Han and Xiangyu Zhang.

AAAI 2024

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCV 2023</div><img src='images/StreamPETR.png' alt="StreamPETR" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[StreamPETR: End-to-End Multi-View 3D Object Detection with Transformers](https://arxiv.org/abs/2303.11926)

**Shihao Wang**, Yingfei Liu, Tiancai Wang, Ying Li and Xiangyu Zhang.

ICCV 2023

</div>
</div>

<span class='anchor' id='honors-and-awards'></span>
# 🎖 Honors and Awards
- *2024.06* Winner, CVPR24 Challenge on End-to-End Driving at Scale
- *2024.06* 2nd Place, CVPR24 Challenge on Driving with Language
- *2023.11* 1st Place, nuScenes leaderboard on camera-only 3D object tracking

<span class='anchor' id='educations'></span>
# 📖 Educations
- *2024.09 - Present*, Ph.D. in Computer Vision, Department of Computing, Hong Kong Polytechnic University (PolyU), Hong Kong
- *2021.09 - 2024.06*, M.Sc. in Vehicle Engineering, Beijing Institute of Technology (BIT), Beijing, GPA: 89.5/100
- *2017.09 - 2021.06*, B.Sc. in Vehicle Engineering, Beijing Institute of Technology (BIT), Beijing, GPA: 87.5/100

<span class='anchor' id='invited-talks'></span>
# 💬 Invited Talks
- *2024.07*, [OmniDrive: Advancing autonomous driving 3D perception, reasoning, and planning with large models](https://www.bilibili.com/video/BV1jH4y1c7rD/?spm_id_from=333.337.search-card.all.click&vd_source=9cbcbed80d96a79a1b4271286ac0f279)
- *2023.12*, [Sparse vectorized representation for long-term temporal modeling](https://www.bilibili.com/video/BV1EG411a7s3/?spm_id_from=333.337.search-card.all.click&vd_source=9cbcbed80d96a79a1b4271286ac0f279)
- *2023.08*, [How can BEV perception be achieved without BEV features?](https://www.bilibili.com/video/BV1sp4y137fh/?spm_id_from=333.337.search-card.all.click&vd_source=9cbcbed80d96a79a1b4271286ac0f279)


<span class='anchor' id='internships'></span>
# 💻 Internships
- *2023.10 - 2025.01*, [NVIDIA](https://www.nvidia.com/en-us/research/), Beijing, China.  
  - Research Intern, AV Applied Research Group. Contributed to Eagle VLM family, VideoITG, HydraMDP, OmniDrive, GR00T N1.5.
- *2022.04 - 2023.07*, [MEGVII Technology](https://megvii.com/), Beijing, China.  
  - Research Intern, Foundation Model Group (PI: [Xiangyu Zhang](https://scholar.google.com/citations?user=yuB-cfoAAAAJ&hl=en)). Developed StreamPETR, Far3D, etc.

<span class='anchor' id='gundam'></span>
# 🤖 Mobile Suit Archive

<p class="ms-intro">// Off-duty protocol — my favorite Mobile Suits. Official PVs &amp; episodes streamed from the <a href="https://www.youtube.com/@GundamInfo" target="_blank" rel="noopener">GUNDAM CHANNEL INTL</a> (official). Select a unit to deploy.</p>

<div class="ms-archive">

  <div class="ms-card ms-uc" data-yt="mAxCyrDuNiA">
    <div class="ms-media">
      <img class="ms-thumb" src="https://i.ytimg.com/vi/mAxCyrDuNiA/maxresdefault.jpg" alt="Nu Gundam — Char's Counterattack official video" loading="lazy">
      <span class="ms-corner tl"></span><span class="ms-corner br"></span>
      <span class="ms-scan"></span>
      <button type="button" class="ms-play" aria-label="Play official video"></button>
    </div>
    <div class="ms-info">
      <span class="ms-tag">U.C. 0093 // E.F.S.F.</span>
      <h3 class="ms-name">ν GUNDAM</h3>
      <p class="ms-desc">Char's Counterattack — Amuro Ray and the Psyco-Frame. The Universal Century classic.</p>
      <a class="ms-link" href="https://en.gundam-official.com/feature/GWOY/" target="_blank" rel="noopener">OFFICIAL SITE ▸</a>
    </div>
  </div>

  <div class="ms-card ms-seed" data-yt="wzgS_8LBmlg">
    <div class="ms-media">
      <img class="ms-thumb" src="https://i.ytimg.com/vi/wzgS_8LBmlg/maxresdefault.jpg" alt="Gundam SEED FREEDOM official trailer" loading="lazy">
      <span class="ms-corner tl"></span><span class="ms-corner br"></span>
      <span class="ms-scan"></span>
      <button type="button" class="ms-play" aria-label="Play official video"></button>
    </div>
    <div class="ms-info">
      <span class="ms-tag">C.E. 75 // COSMIC ERA</span>
      <h3 class="ms-name">GUNDAM SEED</h3>
      <p class="ms-desc">SEED FREEDOM — Kira Yamato, Phase Shift and wings of light. The Cosmic Era saga.</p>
      <a class="ms-link" href="https://en.gundam-official.com/seed/freedom/" target="_blank" rel="noopener">OFFICIAL SITE ▸</a>
    </div>
  </div>

  <div class="ms-card ms-00" data-yt="7jLv_j-m8F4">
    <div class="ms-media">
      <img class="ms-thumb" src="https://i.ytimg.com/vi/7jLv_j-m8F4/maxresdefault.jpg" alt="Mobile Suit Gundam 00 official episode" loading="lazy">
      <span class="ms-corner tl"></span><span class="ms-corner br"></span>
      <span class="ms-scan"></span>
      <button type="button" class="ms-play" aria-label="Play official video"></button>
    </div>
    <div class="ms-info">
      <span class="ms-tag">A.D. 2307 // CELESTIAL BEING</span>
      <h3 class="ms-name">GUNDAM 00</h3>
      <p class="ms-desc">Setsuna F. Seiei, GN particles and Trans-Am. Armed interventions to eradicate war.</p>
      <a class="ms-link" href="https://en.gundam.info/" target="_blank" rel="noopener">OFFICIAL SITE ▸</a>
    </div>
  </div>

</div>

