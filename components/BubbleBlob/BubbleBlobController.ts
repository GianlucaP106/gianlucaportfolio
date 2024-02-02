import * as THREE from 'three'

// @ts-ignore
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// @ts-ignore
import fragmentShader from './fragmentshader.glsl'

export const BUBBLE_ID = 'bubble-canvas'

const NUMBER_LINES = 100
const NUMBER_POINTS = 750
export function initBlob(color: number) {
    const WIDTH = 350;
    const HEIGHT = 350;

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.5, 1000)
    const canvas = document.getElementById(BUBBLE_ID) as HTMLCanvasElement
    const renderer = new THREE.WebGLRenderer({ canvas })

    renderer.setClearColor(0x000000, 0) // The second parameter (0) is the alpha value

    // Create a sphere geometry
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)

    // Create a material for the sphere
    const sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        wireframe: true,
        opacity: 0,
    })

    // Create the sphere mesh
    const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphereMesh.visible = false
    // Add the sphere mesh to the scene
    scene.add(sphereMesh)

    // Create a buffer geometry for points
    const pointsGeometry = new THREE.BufferGeometry()

    // Create an array to hold the positions of the points
    const pointsPositions = []

    // Populate the pointsPositions array with random points on the sphere
    for (let i = 0; i < NUMBER_POINTS; i++) {
        const phi = Math.acos(-1 + Math.random() * 2)
        const theta = Math.random() * Math.PI * 2;

        const x = Math.sin(phi) * Math.cos(theta)
        const y = Math.sin(phi) * Math.sin(theta)
        const z = Math.cos(phi)

        pointsPositions.push(x, y, z)
    }

    for (let i = 0; i < NUMBER_POINTS / 3; i++) {
        const phi = Math.acos(-1 + Math.random() * 2);
        const theta = Math.random() * Math.PI * 2;

        const x = 1.1 * Math.sin(phi) * Math.cos(theta)
        const y = 1.1 * Math.sin(phi) * Math.sin(theta)
        const z = 1.1 * Math.cos(phi)

        pointsPositions.push(x, y, z)
    }

    // Set the positions in the buffer geometry
    pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(pointsPositions, 3))

    // Create points material
    const pointsMaterial = new THREE.PointsMaterial({ color: color, size: 0.015 })

    // Create points mesh
    const pointsMesh = new THREE.Points(pointsGeometry, pointsMaterial)

    // Add the points mesh to the scene
    scene.add(pointsMesh)

    // Create a shader material for the glowing effect
    const glowMaterial = new THREE.ShaderMaterial({
        // vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        blending: THREE.AdditiveBlending,
        transparent: true,
    })

    // Create a mesh using the same buffer geometry for glowing points
    const glowMesh = new THREE.Mesh(pointsGeometry, glowMaterial)

    // Add the glowing mesh to the scene
    scene.add(glowMesh)

    // Create lines connecting certain points
    const linesGeometry = new THREE.BufferGeometry()
    const linesMaterial = new THREE.LineBasicMaterial({ color: color, transparent: true, opacity: 0.2 })

    const linesPositions = []
    for (let i = 0; i < NUMBER_LINES; i++) {
        const index1 = Math.floor(Math.random() * NUMBER_POINTS)
        const index2 = Math.floor(Math.random() * NUMBER_POINTS)

        linesPositions.push(
            pointsPositions[index1 * 3],
            pointsPositions[index1 * 3 + 1],
            pointsPositions[index1 * 3 + 2],
            pointsPositions[index2 * 3],
            pointsPositions[index2 * 3 + 1],
            pointsPositions[index2 * 3 + 2]
        )
    }

    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linesPositions, 3))
    const lines = new THREE.LineSegments(linesGeometry, linesMaterial)
    scene.add(lines)

    // Position the camera
    camera.position.z = 1.9;

    const orbit = new OrbitControls(camera, canvas)
    orbit.enableDamping = true
    orbit.dampingFactor = 0.1
    orbit.autoRotate = true
    orbit.autoRotateSpeed = 0.5
    orbit.enableZoom = true
    orbit.maxDistance = 2
    orbit.minDistance = 1.75

    // Animation loop
    const animate = () => {
        requestAnimationFrame(animate)

        // Rotate the sphere and points
        sphereMesh.rotation.x += 0.005
        sphereMesh.rotation.y += 0.005

        lines.rotation.x += 0.005
        lines.rotation.y += 0.005

        pointsMesh.rotation.copy(sphereMesh.rotation)
        glowMesh.rotation.copy(sphereMesh.rotation)

        // Render the scene
        renderer.render(scene, camera)
    }

    // Start the animation loop
    animate()

    const resize = () => {
        camera.aspect = WIDTH / HEIGHT
        camera.updateProjectionMatrix()
        renderer.setSize(WIDTH, HEIGHT)
    }
    // Handle window resize
    window.addEventListener('resize', () => {
        resize()
    });
    resize()
}
