import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import * as THREE from 'three'
import Lights from './Lights';
import { Suspense } from "react";
import PhoneS21 from './PhoneS21'

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
    return (
        <View
            index={index}
            id={gsapType}
            className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
        >
            <ambientLight intensity={1} />
            <PerspectiveCamera makeDefault position={[0, 3, 8]} />
            <Lights />

            <OrbitControls
                makeDefault
                ref={controlRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.8}
                target={new THREE.Vector3(0, 0, 0)}
                onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
            />

            <group ref={groupRef} name={`${index === 1} ? 'small' : 'large'`} position={[0, 0, 0]}>
                <Suspense fallback={<Html><div>Loading..</div></Html>}>
                    <PhoneS21
                        scale={index === 1 ? [0.05, 0.05, 0.05] : [0.06, 0.06, 0.06]}
                        item={item}
                        size={size}
                    />
                </Suspense>
            </group>
        </View>
    )
}

export default ModelView